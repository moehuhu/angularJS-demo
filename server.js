var express = require("express")
var bodyParser = require('body-parser');
var app = express()
var dataUtil = require("./utils/dataUtil")
var db = new dataUtil()
var path = require('path');

var page = "./page/index.html"
var script = "./page/script.js"
var data="./data/listdata.json"

app.use(bodyParser.urlencoded({
    extended: true
}));
app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname, '/') + page)
})

app.get("/script.js", function (request, response) {
    response.sendFile(path.join(__dirname, '/') + script)
})

app.get("/get", function (request, response) {
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
    console.log(request.query)
    var newItem = request.query
    db.create(newItem)
    response.send(request.query)
})
app.post("/delete", function (request, response) {
    console.log(request.query)
    db.delete(request.query)
    response.send(request.query)
})
app.post("/update", function (request, response) {
    db.update(request.query)
    response.send(request.query)
})
app.listen(3000, function () {
    console.log("server is running...")
    
})