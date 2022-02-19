const express = require("express");

// middleware imports
const { fetchUser } = require("../middleware/user-validator");
const { fetchCompany, validate } = require("../middleware/company-validator");
const { jobCreationValidationRules } = require("../middleware/job-validator");

// controller imports
const {
  fetchAllJobs,
  addJob,
  fetchAllCompanyJobs,
  applyJob,
} = require("../controllers/controller-jobs");

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

// Route 3: Get all the company-specific jobs using: GET "/api/jobs/fetchallcompanyjobs". Login required
router.get("/fetchallcompanyjobs", fetchCompany, fetchAllCompanyJobs);

// Route 4: Apply for a job using: POST "api/jobs/apply/:jobid". Login required
router.post("/apply/:jobid", fetchUser, applyJob);

module.exports = router;
