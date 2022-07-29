const { Schema } = require("mongoose");

const singleIssue = new Schema({
  series: { type: String, required: true },
  issueNumber: { type: String, required: true },
  writer: { type: String, required: true },
  artist: { type: String, required: true },
  release_date: { type: String, required: true },
  cover_art: { type: String },
});

module.exports = singleIssue;
