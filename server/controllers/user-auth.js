const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// schema imports
const User = require("./../models/User");

const JWTSecret = process.env.JWT_SECRET;

module.exports.signUp = async (req, res) => {
  try {
    let user = await User.findOne({ aadhar: req.body.aadhar });
    if (user) {
      res
        .status(400)
        .json({ success: false, message: "Please enter a unique aadhar" });
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      aadhar: req.body.aadhar,
      email: req.body.email,
      mobile: req.body.mobile,
      age: req.body.age,
      place: req.body.place,
      disabilitytype: req.body.disabilitytype,
      disability: req.body.disability,
      severity: req.body.severity,
      qualifications: req.body.qualifications,
      password: secPass,
    });
    const data = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, JWTSecret);
    res.json({
      success: true,
      message: "User created successfully",
      authToken,
    });
  } catch (err) {
    console.error(err.message);
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        success: false,
        error: "Please try to login with correct credentials",
      });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
      res.status(400).json({
        success: false,
        error: "Please try to login with correct credentials",
      });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(payload, JWTSecret);
    res.json({ success: true, authToken });
  } catch (err) {
    console.error(err.message);
  }
};

module.exports.getUser = async (req, res) => {
  try {
    let userID = req.user.id;
    const user = await User.findById(userID).select("-password");
    res.json({ success: true, user });
  } catch (err) {
    console.error(err.message);
  }
};
