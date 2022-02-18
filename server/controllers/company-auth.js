const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// schema imports
const Company = require("../models/Company");

const JWTSecret = process.env.JWT_SECRET;

module.exports.signUp = async (req, res) => {
  try {
    let company = await Company.findOne({ gstin: req.body.gstin });
    if (company) {
      res
        .status(400)
        .json({ success: false, message: "Please enter a unique GSTIN" });
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    company = await Company.create({
      name: req.body.name,
      head: req.body.head,
      mobile: req.body.mobile,
      email: req.body.email,
      website: req.body.website,
      gstin: req.body.gstin,
      password: secPass,
    });
    const data = {
      company: {
        id: company.id,
      },
    };
    const authToken = jwt.sign(data, JWTSecret);
    res.json({
      success: true,
      message: "Company registered successfully",
      authToken,
    });
  } catch (err) {
    console.error(err.message);
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const company = await Company.findOne({ email });
    if (!company) {
      res.status(400).json({
        success: false,
        error: "Please try to login with correct credentials",
      });
    }

    const passwordCompare = await bcrypt.compare(password, company.password);

    if (!passwordCompare) {
      res.status(400).json({
        success: false,
        error: "Please try to login with correct credentials",
      });
    }

    const payload = {
      company: {
        id: company.id,
      },
    };
    const authToken = jwt.sign(payload, JWTSecret);
    res.json({ success: true, authToken });
  } catch (err) {
    console.error(err.message);
  }
};

module.exports.getCompany = async (req, res) => {
  try {
    let companyID = req.company.id;
    const company = await Company.findById(companyID).select("-password");
    res.json({ success: true, company });
  } catch (err) {
    console.error(err.message);
  }
};
