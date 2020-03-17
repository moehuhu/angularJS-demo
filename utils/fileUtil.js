var fs = require("fs");

var path = "./data/";
var fileName = "listdata.json";

function FileOperations() {
  var file = path + fileName;
  function writeJson(params) {
    //现将json文件读出来
    fs.readFile(file, function(err, data) {
      if (err) {
        return console.error(err);
      }
      var person = data.toString();
      person = JSON.parse(person);
      person.data.push(params); 
      person.total = person.data.length;
      console.log(person.data);
      var str = JSON.stringify(person); //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
      fs.writeFile(file, str, function(err) {
        if (err) {
          console.error(err);
        }
        console.log("Created");
      });
    });
  }
}
module.exports = FileOperations;
