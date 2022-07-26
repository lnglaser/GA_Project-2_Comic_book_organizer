const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const controllers = require("./controllers");
const db = require("./db");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(logger("dev"));

app.get("/", (request, response) => {
  response.send("Testing basic route");
});

app.get("/serieslist", controllers.getAllSeries);

app.get("/searchseries/:title", controllers.getSeriesByTitle);

app.get("/issuelist", controllers.getAllSingleIssues);

app.post("/newseries", controllers.addNewSeries);

app.post("/newissue", controllers.addNewIssue);

app.delete("/removeseries/:id", controllers.deleteSeries);

app.delete("/removeissue/:id", controllers.deleteIssue);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
