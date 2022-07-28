const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const controllers = require("./controllers");
const db = require("./db");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(logger("dev"));
app.use(cors());
app.use(express.static(`${__dirname}/client/build`));

app.get("/", (request, response) => {
  response.send("Testing basic route");
});

app.get("/serieslist", controllers.getAllSeries);

app.get("/searchseries/:title", controllers.getSeriesByTitle);

app.get("/searchissue/:series", controllers.getIssuesBySeries);

app.get("/issuelist", controllers.getAllSingleIssues);

app.post("/newseries", controllers.addNewSeries);

app.post("/newissue/:seriesName", controllers.addNewIssue);

app.put("/updateissue/:id", controllers.updateSingleIssue);

app.put("/updateseries/:id", controllers.updateSeries);

app.delete("/removeseries/:id", controllers.deleteSeries);

app.delete("/removeissue/:id", controllers.deleteIssue);

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
