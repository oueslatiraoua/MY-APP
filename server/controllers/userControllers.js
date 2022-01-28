const Person = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Auth user and return Token
//@route POST /api/user/register
//@access public

const register = async (req, res) => {
  const newBody = JSON.parse(req.body.info);
  console.log(newBody);
  try {
    const picturePath = `http://localhost:5000/uploadsForUser/${req.file.filename}`;
    console.log("picture path:", picturePath);
    const hashedPassword = await bcrypt.hash(newBody.password, 10);

    const newPerson = await Person.create({
      ...newBody,
      picture: picturePath,
      password: hashedPassword,
    });
    console.log("new person", newPerson);
    const token = jwt.sign({ id: newPerson._id }, process.env.SECRET_KEY);

    /*const token =
      newPerson.role === "user"
        ? jwt.sign({ id: newPerson._id }, process.env.SECRET_KEY)
        : jwt.sign({ id: newPerson._id }, process.env.SECRET_KEY2);
*/
    res.json({ msg: "new user", newPerson, token });
  } catch (err) {
    res.status(500).json({ msg: `something went wrong ${err}` });
  }
};

//@desc Auth user and return Token
//@route POST /api/user/login
//@access public

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existPerson = await Person.findOne({
      email,
    });
    if (!existPerson)
      return res.json(res.status(404).json({ msg: "REGISTER PLEASE" }));
    const verifyPassword = await bcrypt.compare(password, existPerson.password);
    console.log(password);
    console.log(existPerson.password);
    console.log(existPerson);
    console.log("*************");
    if (!verifyPassword)
      return res.json(res.status(401).json({ msg: "WRONG PASSWORD" }));
    const token = jwt.sign({ id: existPerson._id }, process.env.SECRET_KEY);

    //const token =
    //existPerson.role === "user"
    /*? jwt.sign({ id: existPerson._id }, process.env.SECRET_KEY) */
    //: jwt.sign({ id: existPerson._id }, process.env.SECRET_KEY2);
    res.json({ token, existPerson });
  } catch (err) {
    res.status(500).json({ msg: `something went wrong ${err}` });
  }
};
//@desc load user info
//@route GET /api/user/loadUser
//@access public
const loadUserInfo = async (req, res) => {
  try {
    const person = await Person.findById(req.userId);
    console.log(person);
    res.json(person);
  } catch (err) {
    res.status(500).json({ msg: `something went wrong ${err}` });
  }
};
/*const loadFreelancerInfo = async (req, res) => {
  try {
    const person = await Person.findById(req.freelancerId).select(
      "-password-__v"
    );
    res.json(person);
  } catch (error) {
    res.status(500).json({ msg: `something went wrong ${err}` });
  }
};
*/
//@desc load user info
//@route GET /api/user/loadFreelancerInfo/:Id
//@access public
const loadFreelancerInfo = async (req, res) => {
  try {
    const freelancer = await Person.findById(req.params.Id);

    res.json(freelancer);
  } catch (err) {
    res.status(500).json({ msg: `something went wrong ${err}` });
  }
};
module.exports = { register, login, loadUserInfo, loadFreelancerInfo };
