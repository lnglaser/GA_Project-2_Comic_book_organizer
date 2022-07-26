const { Schema } = require("mongoose");

const ComicSeriesSchema = new Schema(
  {
    title: { type: String, required: true },
    launch_year: { type: String, required: true },
    number_of_issues: { type: Number },
    publisher: { type: String, required: true },
    cover_art: { type: String },
  },
  { timestamps: true }
);

module.exports = ComicSeriesSchema;
