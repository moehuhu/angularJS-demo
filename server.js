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
app.post("/create", function (request, response) {
    console.log(request.query.Text)
    var newItem={Text:request.query.Text,id:0}
    db.create(newItem)
    response.send("Created new record: "+request.query.Text)
})
app.post("/delete", function (request, response) {
    console.log(request.query.Index)
    db.delete(request.query.Index)
    response.send("Deleted record at: "+request.query.Index)
})
app.get("/update", function (request, response) {
    console.log(request.query.Index)
    console.log(request.query.Text)
    response.sendFile(path.join(__dirname, '/') + fileName)
})
app.listen(8000, function () {
    console.log("server is running...")
})