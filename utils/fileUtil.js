var fs = require("fs");

var path = "./data/";
var fileName = "listdata.json";

function FileOperations() {
  var file = path + fileName;
  this.writeJson = function (item) {
    fs.readFile(file, function (err, data) {
      if (err) {
        return console.error(err);
      }
      var listdata = data.toString();
      listdata = JSON.parse(listdata);
      item.id = listdata.total;
      console.log(item + "in FileUtil");
      listdata.records.push(item);
      listdata.size = listdata.records.length;
      listdata.total += 1;
      console.log(listdata.records);
      var str = JSON.stringify(listdata);
      fs.writeFile(file, str, function (err) {
        if (err) {
          console.error(err);
        }
        console.log("Created");
      });
    });
  };
  this.deleteJson = function (item) {
    fs.readFile(file, function (err, data) {
      if (err) {
        return console.error(err);
      }
      var listdata = data.toString();
      listdata = JSON.parse(listdata);
      for (let i = 0; i < listdata.records.length; i++) {
        if (listdata.records[i].id == item.id)
          listdata.records.splice(i, 1);
      }
      listdata.size = listdata.records.length;
      console.log(listdata.records);
      var str = JSON.stringify(listdata);
      fs.writeFile(file, str, function (err) {
        if (err) {
          console.error(err);
        }
        console.log("Deleted");
      });
    });
  };
  this.updateJson = function (item) {
    fs.readFile(file, function (err, data) {
      if (err) {
        return console.error(err);
      }
      var listdata = data.toString();
      listdata = JSON.parse(listdata);
      console.log(item + " in FileUtil for update");
      for (let i = 0; i < listdata.records.length; i++) {
        if (listdata.records[i].id == item.id)
          listdata.records[i] = item;
      }
      console.log(listdata.records);
      var str = JSON.stringify(listdata);
      fs.writeFile(file, str, function (err) {
        if (err) {
          console.error(err);
        }
        console.log("Updated");
      });
    });
  }
  this.getJson = function () {
    data = fs.readFileSync(file);
    var listdata = data.toString();
    return data

  }
}
module.exports = FileOperations;
