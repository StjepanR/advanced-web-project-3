const express = require("express");
const serveStatic = require('serve-static');
const path = require('path');
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");


const app = express()
app.use(bodyParser.json());
app.use(cors());

let jsonCities;

fs.readFile("db.json", function (err, data) {
    var jsonData = data;
    jsonCities = JSON.parse(jsonData);
});



app.get("/api/cities", function (req, res) {
    res.json(jsonCities);
});

app.get("/api/cities/:city", function (req, res) {
    var cityR = jsonCities.filter(cityI => cityI.id === req.params.city)
    res.json(...cityR);
});

app.put("/api/cities/:city", function (req, res) {
    var data = req.body
    jsonCities = jsonCities.map(CityI => CityI.id == req.params.city ? data : CityI)
    res.json(jsonCities);
});

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 8085
app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});