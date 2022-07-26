const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const controllers = require("./controllers");
const db = require('./db')
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(logger('dev'))


// app.get('/serieslist', (request, response) => {
    //     response.send("This is the list of series.")
    // })
    app.get("/", (request, response) => {
        response.send("Testing basic route");
    });
    
app.get("/serieslist", controllers.getAllSeries);

app.get("/issuelist", (resuest, response) => {
    response.send("List of comics goes here")
})
    

// app.post("/newissue", (request, response) => {
//     response.send("Testing new issue route")
// })

app.post("/newseries", controllers.addNewSeries)

// app.delete("/removeseries/:id", controllers.deleteSeries)
app.delete("/removeseries/:id", (request, response) => {
    response.send(`Series ${request.params.id} removed`)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
