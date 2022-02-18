const express = require("express");

// middleware imports
const { fetchUser } = require("../middleware/user-validator");
const { fetchCompany, validate } = require("../middleware/company-validator");
const { jobCreationValidationRules } = require("../middleware/job-validator");

// controller imports
const { fetchAllJobs, addJob } = require("../controllers/controller-jobs");

const router = express.Router();

// Route 1: Get all the jobs using: GET "/api/jobs/fetchalljobs". Login required
router.get("/fetchalljobs", fetchUser, fetchAllJobs);

// Route 2: Add a new job using: POST "/api/jobs/addjob". Login required
router.post(
  "/addjob",
  fetchCompany,
  jobCreationValidationRules(),
  validate,
  addJob
);

module.exports = router;
