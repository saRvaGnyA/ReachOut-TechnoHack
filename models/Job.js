const mongoose = require("mongoose");
const { Schema } = mongoose;

const JobSchema = new Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "company",
  },
  title: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
  },
  sector: {
    type: String,
    required: true,
  },
  disability: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  applicants: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("job", JobSchema);
