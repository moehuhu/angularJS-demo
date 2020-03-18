var fs = require("fs");

var path = "./data/";
var fileName = "listdata.json";

function FileOperations() {
  var file = path + fileName;
  this.writeJson = function(item) {
    fs.readFile(file, function(err, data) {
      if (err) {
        return console.error(err);
      }
      var listdata = data.toString();
      listdata = JSON.parse(listdata);
      item.id = listdata.total;
      console.log(item + "in FileUtil");
      listdata.records.push(item);
      listdata.size = listdata.records.length;
      listdata.total+=1;
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
      listdata.size = listdata.records.length;
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
  this.updateJson=function (index,item) {
    fs.readFile(file, function(err, data) {
      if (err) {
        return console.error(err);
      }
      var listdata = data.toString();
      listdata = JSON.parse(listdata);
      console.log(item + "in FileUtil for update");
      listdata.records[index].Text=item.Text;
      console.log(listdata.records);
      var str = JSON.stringify(listdata);
      fs.writeFile(file, str, function(err) {
        if (err) {
          console.error(err);
        }
        console.log("Updated");
      });
    });
  }
}
module.exports = FileOperations;
