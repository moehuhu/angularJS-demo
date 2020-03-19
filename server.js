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
var script = "script.js"

app.use(bodyParser.urlencoded({
    extended: true
}));
app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname, '/') + page)
})

app.get("/script.js", function (request, response) {
    response.sendFile(path.join(__dirname, '/') + script)
})

app.get("/list", function (request, response) {
    db.getList().then(v => {
        list = v.toString()
    }).then(function () {
        list = JSON.parse(list)
    }).then(function(){
        response.send(list)
    }).catch(e=>{
        console.error(e)
    });

})
app.post("/create", function (request, response) {
    var newItem = request.query
    db.create(newItem)
    response.send("Created new record: " + request.query)
})
app.post("/delete", function (request, response) {
    db.delete(request.query)
    response.send("Deleted record: " + request.query)
})
app.post("/update", function (request, response) {
    db.update(request.query)
    response.send("Updated record: " + request.query)
})
app.listen(8000, function () {
    console.log("server is running...")
})