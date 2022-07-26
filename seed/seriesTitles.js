const db = require("../db");
const { Series } = require("../models");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const ComicSeriesArr = [
    {
      title: 'Monstress',
      launch_year: '2016',
      number_of_issues: 41,
      publisher: 'Image Comics',
    },
    {
      title: 'Usagi Yojimbo',
      launch_year: '2019',
      number_of_issues: 29,
      publisher: 'IDW Publishing',
    },
  ];

  await Series.insertMany(ComicSeriesArr)
  console.log('Starting series list added')
};

const run = async () => {
    await main ()
    db.close()
}

run()