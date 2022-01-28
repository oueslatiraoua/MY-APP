/*const jwt = require("jsonwebtoken");

const middlewareFreelancer = async (req, res, next) => {
  try {
    const verifyToken = jwt.verify(req.headers.token, process.env.SECRET_KEY2);
    req.freelancerId = verifyToken.id;
    next();
  } catch (error) {
    res.status(400).json({ msg: `invalid token${err}` });
  }
};
module.exports = middlewareFreelancer;
*/