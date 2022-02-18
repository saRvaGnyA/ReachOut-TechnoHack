const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWTSecret = process.env.JWT_SECRET;

module.exports.companySignUpValidationRules = () => {
  return [
    body("name", "Enter a valid company name").isLength({ min: 3 }),
    body("head", "Enter a valid head").isLength({ min: 3 }),
    body("mobile", "Enter a valid mobile number").isLength({
      min: 10,
      max: 10,
    }),
    body("email", "Enter a valid email").isEmail(),
    body("gstin", "Enter a valid GSTIN number").isLength({
      min: 15,
      max: 15,
    }),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ];
};

module.exports.validate = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

module.exports.companyLoginValidationRules = () => {
  return [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ];
};

module.exports.fetchCompany = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res
      .status(401)
      .send({ success: false, message: "Access denied, invalid token" });
  }
  try {
    const data = jwt.verify(token, JWTSecret);
    req.company = data.company;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).send({
      success: false,
      message: "Access denied, token cannot be identified",
    });
  }
};
