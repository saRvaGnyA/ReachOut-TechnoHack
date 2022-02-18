const express = require("express");

// middleware imports
const {
  companySignUpValidationRules,
  companyLoginValidationRules,
  validate,
  fetchCompany,
} = require("../middleware/company-validator");

// controller imports
const { signUp, login, getCompany } = require("../controllers/company-auth");

const router = express.Router();

// Route 1: Create a company using: POST "/api/company/createcompany". No login required
router.post("/createcompany", companySignUpValidationRules(), validate, signUp);

// Route 2: Authenticate a company using: POST "/api/company/login". No login required
router.post("/login", companyLoginValidationRules(), validate, login);

// Route 3: Get the logged in company's details using: POST "/api/company/getcompany". Login required
router.post("/getcompany", fetchCompany, getCompany);

module.exports = router;
