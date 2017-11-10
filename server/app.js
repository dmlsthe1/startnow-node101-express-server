// import files and packages up here
var express = require("express");
var morgan = require("morgan");
var topSpots = require("./data.json");
var bodyParser = require("body-parser");

// create your express server below
var app = express();
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(morgan(function(tokens, req, res){
    return tokens.status(req, res)
}));

// add your routes and middleware below
app.get("/", function(req, res){
    res.send("Easy reading");
})

app.get("/data", function(req, res){
    res.send(topSpots);
})
// finally export the express application
module.exports = app;
