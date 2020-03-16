var fs = require("fs");

var path = "./data/";
var fileName = "listdata.txt";


var buf = new Buffer.alloc(1024);

function FileOperations() {
    var file = path + fileName;
    console.log("File module loaded");
    var data = [];
    fs.open(file, "r+", function (err,fd) {
        if (err) {
            return console.error(err);
        }
        console.log("file loaded");
        fs.read(fd, buf, 0, buf.length, 0,function (err,bytes) {
            if (err){
                console.log(err);
            }
            console.log(buf.slice(0, bytes).toString())
            
        })
    });
    

}
module.exports = FileOperations;
