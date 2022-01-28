const { body } = require("express-validator");
//***********freelancer validation info (not required for a simple user )
const validation = [
  body("picture").exists(),
  body("portfolio").exists(),
  body("service").exists(),
  body("biography").exists(),
];

module.exports = validation;
