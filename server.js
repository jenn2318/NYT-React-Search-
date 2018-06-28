// Dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");
var apiController = require('./controllers/apiArticleController')

// Here we will set up the port, configure mongoose, configure our middleware
var PORT = process.env.PORT || 3000;
mongoose.Promise = mongoose;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(express.static(__dirname + "/build"));

var db = process.env.MONGODB_URI || "mongodb://localhost/nyt-react";

// Connect mongoose to our database
mongoose.connect(db, function(error) {
    if (error) {
        console.error(error);
    }
    else {
        console.log("mongoose connection is successful");
    }
});
