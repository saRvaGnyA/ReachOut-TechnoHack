const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWTSecret = process.env.JWT_SECRET;

module.exports.userSignUpValidationRules = () => {
  return [
    body("firstname", "Enter a valid first name").isLength({ min: 1 }),
    body("lastname", "Enter a valid last name").isLength({ min: 1 }),
    body("aadhar", "Enter a valid Aadhar Number").isLength({
      min: 12,
      max: 12,
    }),
    body("mobile", "Enter a valid mobile number").isLength({
      min: 10,
      max: 10,
    }),
    body("email", "Enter a valid email").isEmail(),
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

module.exports.userLoginValidationRules = () => {
  return [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ];
};

module.exports.fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res
      .status(401)
      .send({ success: false, message: "Access denied, invalid token" });
  }
  try {
    const data = jwt.verify(token, JWTSecret);
    req.user = data.user;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).send({
      success: false,
      message: "Access denied, token cannot be identified",
    });
  }
};
