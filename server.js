var express=require("express")
var app=express()
var fileUtil=require("./utils/fileUtil")
var path=require('path');
var fileName = "data/listdata.txt";
var fs=new fileUtil()

var page="index.html"

app.get("/",function (request,response) {
    response.sendFile(path.join(__dirname, '/')+page)
})
app.get("/list",function (request,response) {
    response.sendFile(path.join(__dirname, '/')+fileName)
})
app.listen(8000,function () {
    console.log("server is running...")
})