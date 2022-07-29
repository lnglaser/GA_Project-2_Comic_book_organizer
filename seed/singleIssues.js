const db = require("../db");
const { Issue } = require("../models");
const { Series } = require("../models/");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  Series.collection.drop(Issue.collection.drop());
  const series1 = await new Series({
    title: "Monstress",
    launch_year: "2016",
    number_of_issues: 41,
    publisher: "Image Comics",
  });
  series1.save();

  const series2 = await new Series({
    title: "Usagi Yojimbo",
    launch_year: "2019",
    number_of_issues: 29,
    publisher: "IDW Publishing",
  });
  series2.save();

  const singleIssueArr = [
    {
      series: series1.title,
      issueNumber: "1",
      writer: "Marjorie Liu",
      artist: "Sana Takeda",
      release_date: "2015-11-04",
    },
    {
      series: series1.title,
      issueNumber: "2",
      writer: "Marjorie Liu",
      artist: "Sana Takeda",
      release_date: "2015-12-09",
    },
    {
      series: series2.title,
      issueNumber: "1",
      writer: "Stan Sakai",
      artist: "Stan Sakai",
      release_date: "2019-06-19",
    },
    {
      series: series2.title,
      issueNumber: "2",
      writer: "Stan Sakai",
      artist: "Stan Sakai",
      release_date: "2019-07-17",
    },
  ];

  await Issue.insertMany(singleIssueArr);
  console.log("Issue collection seeded");
};

const run = async () => {
  await main();
  db.close();
};

run();
