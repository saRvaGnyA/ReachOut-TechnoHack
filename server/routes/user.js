const express = require("express");

// middleware imports
const {
  validate,
  userSignUpValidationRules,
  userLoginValidationRules,
  fetchUser,
} = require("../middleware/user-validator");

// controller imports
const { signUp, login, getUser } = require("../controllers/user-auth");

const router = express.Router();

// Route 1: Create a user using: POST "/api/user/createuser". No login required
router.post("/createuser", userSignUpValidationRules(), validate, signUp);

// Route 2: Authenticate a user using: POST "/api/user/login". No login required
router.post("/login", userLoginValidationRules(), validate, login);

// Route 3: Get the logged in user's details using: POST "/api/user/getuser". Login required
router.post("/getuser", fetchUser, getUser);

module.exports = router;
