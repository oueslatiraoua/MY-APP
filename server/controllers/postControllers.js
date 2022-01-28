const Post = require("../models/postModel.js");
const { post } = require("../routes/postRoute.js");

//@desc add post
//@route POST /api/post/newpost
//@access private

const addPost = async (req, res) => {
  const newBody = JSON.parse(req.body.info);
  console.log(newBody);
  try {
    const imagePath = `http://localhost:5000/uploads/${req.file.filename}`;

    const userId = req.userId;
    const { likes, comments, packages } = req.body;

    const newPost = await Post.create({
      title: newBody.title,
      task: newBody.task,
      aboutTheService: newBody.aboutTheService,
      image: imagePath,
      owner: userId,
      likes,
      comments,

      packages,
    });

    res.json({ msg: "new post", newPost });
  } catch (err) {
    res.status(500).json({ msg: `something went wrong ${err}` });
  }
};
//@desc get post
//@route GET /api/post/getposts
//@access public
const getPost = async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate("owner", "-password -__v")
      .populate("comments.commentOwner", "-password -__v")
      .populate("packages");

    res.json(posts);
  } catch (err) {
    res.status(500).json({ msg: `something went wrong ${err}` });
  }
};
//@desc like post
//@route Put /api/post/like/:postId
//@access private-user
const likePost = async (req, res) => {
  try {
    const UserId = req.userId;
    const post = await Post.findById(req.params.postId);

    const checkLike = await post.likes.find((el) => el == UserId);
    if (checkLike)
      await Post.findByIdAndUpdate(req.params.postId, {
        $pull: { likes: UserId },
      });
    else
      await Post.findByIdAndUpdate(req.params.postId, {
        $push: { likes: UserId },
      });
    res.json("post is updated");
  } catch (err) {
    res.status(500).json({ msg: `something went wrong ${err}` });
  }
};
//@desc delete post
//@route delete /api/post/:postId
//@access private-user

const deletePost = async (req, res) => {
  try {
    const UserId = req.userId;
    const post = await Post.findById(req.params.postId);

    if (String(post.owner._id) !== UserId)
      return res.status(401).json({ msg: "not authorized" });
    else await Post.findByIdAndDelete(req.params.postId);

    res.json({ msg: `post is deleted` });
  } catch (error) {
    res.status(500).json({ msg: `something went wrong ${err}` });
  }
};

//@desc update post
//@route update /api/post/:postId
//@access private-owner

const updatePost = async (req, res) => {
  const imagePath = `http://localhost:5000/uploads/${req.file.filename}`;
  try {
    const UserId = req.userId;
    const post = await Post.findById(req.params.postId);

    if (String(post.owner._id) !== UserId)
      return res.status(401).json({ msg: "not authorized" });
    else
      await Post.findByIdAndUpdate(req.params.postId, {
        ...JSON.parse(req.body.info),
        image: imagePath,
      });
    // console.log("req.body", JSON.parse(req.body.info));
    res.json({ msg: `post is updated` });
  } catch (error) {
    res.status(500).json({ msg: `something went wrong ${err}` });
  }
};
//@desc load post info
//@route GET/api/post/loadPostInfo/:postId
//@access public
const loadPostInfo = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
      .populate("owner", "-password -__v")
      .populate("packages");

    res.json(post);
    console.log(post);
  } catch (error) {
    res.status(500).json({ msg: `something went wrong ${err}` });
  }
};
module.exports = {
  addPost,
  getPost,
  likePost,
  deletePost,
  updatePost,
  loadPostInfo,
};
