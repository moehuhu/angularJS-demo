var fileUtil = require("./fileUtil");
var fs = new fileUtil();
function dbOperations() {
  console.log("db module loaded");
  this.create = function(item) {
    fs.writeJson(item);
  };
  this.update = function(item) {
    fs.updateJson(item);
  };
  this.delete = function(item) {
    fs.deleteJson(item);
  };
  this.getList =async function() {
    return fs.getJson()
  };
}
module.exports = dbOperations;
