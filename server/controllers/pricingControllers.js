const Post = require("../models/postModel.js");

//@desc add comment
//@route POST /api/pricing/addPrices/:id
//@access private-user

const addPrices = async (req, res) => {
  try {
    const userId = req.userId;
    const postId = req.params.id;
    const findPost = await Post.findById(postId);
    const { description, serviceTier, price } = req.body;
    if (String(findPost.owner._id) !== userId)
      return res.status(401).json({ msg: "not authorized" });
    else
      await Post.findByIdAndUpdate(postId, {
        $push: { packages: { description, serviceTier, price } },
      });
    res.json({ msg: "new package" });
  } catch (err) {
    res.status(500).json({ msg: `something went wrong ${err}` });
  }
};
module.exports = { addPrices };
