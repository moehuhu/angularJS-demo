var express = require("express")
var url = require('url')
var http = require('http')
var qs = require('querystring')
var bodyParser = require('body-parser');
var app = express()
var dataUtil = require("./utils/dataUtil")
var db = new dataUtil()
var path = require('path');
var fileName = "data/listdata.json";

var page = "index.html"

app.use(bodyParser.urlencoded({
    extended: true
}));
app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname, '/') + page)
})
app.get("/list", function (request, response) {
    response.sendFile(path.join(__dirname, '/') + fileName)
})
app.post("/create", function (req, res) {
    console.log(req.query.Text)
    db.getList
})
app.get("/delete", function (request, response) {
    response.sendFile(path.join(__dirname, '/') + fileName)
})
app.get("/update", function (request, response) {
    response.sendFile(path.join(__dirname, '/') + fileName)
})
app.listen(8000, function () {
    console.log("server is running...")
})