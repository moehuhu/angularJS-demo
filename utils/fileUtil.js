var fs = require("fs");

var path = "./data/";
var fileName = "listdata.json";

function FileOperations() {
  var file = path + fileName;
  this.writeJson = function(params) {
    fs.readFile(file, function(err, data) {
      if (err) {
        return console.error(err);
      }
      var listdata = data.toString();
      listdata = JSON.parse(listdata);
      params.index = listdata.total;
      console.log(params + "in FileUtil");
      listdata.records.push(params);
      listdata.total = listdata.records.length;
      console.log(listdata.records);
      var str = JSON.stringify(listdata);
      fs.writeFile(file, str, function(err) {
        if (err) {
          console.error(err);
        }
        console.log("Created");
      });
    });
  };
  this.deleteJson = function(index) {
    fs.readFile(file, function(err, data) {
      if (err) {
        return console.error(err);
      }
      var listdata = data.toString();
      listdata = JSON.parse(listdata);
      listdata.records.splice(index, 1);
      console.log(listdata.records);
      var str = JSON.stringify(listdata);
      fs.writeFile(file, str, function(err) {
        if (err) {
          console.error(err);
        }
        console.log("Deleted");
      });
    });
  };
}
module.exports = FileOperations;
