// schema imports
const Job = require("../models/Job");

module.exports.fetchAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.json({ success: true, jobs });
  } catch (err) {
    console.error(err);
  }
};

module.exports.addJob = async (req, res) => {
  try {
    const { title, salary, location, sector, disability, qualification } =
      req.body;
    const job = new Job({
      title,
      salary,
      location,
      sector,
      disability,
      qualification,
      company: req.company.id,
    });
    const savedJob = await job.save();
    res.json({ success: true, message: savedJob });
  } catch (err) {
    console.error(err);
  }
};
