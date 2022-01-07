const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
var cors = require("cors");
const fs = require("fs");

const app = express()
app.use(express.static('public'));
app.use(cors());

let jsonCities;

fs.readFile("db.json", function (err, data) {
  var jsonData = data;
  jsonCities = JSON.parse(jsonData);
});

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

app.get("/api/cities", function (req, res) {
    res.json(jsonCities);
});

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})



const port = process.env.PORT || 8085
app.listen(port, function () {
    console.log(
        "Server listening on http://%s:%d in %s mode...",
        this.address().address,
        this.address().port,
        app.settings.env
    );
})