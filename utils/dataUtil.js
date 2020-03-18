var fileUtil = require("./fileUtil")
var fs = new fileUtil()
function dbOperations() {
    console.log("db module loaded");
    this.create = function (item) {
        console.log(item)
        fs.writeJson(item)
    }
    this.update = function (index,item) {
        console.log(index)
        console.log(item)
        fs.updateJson(index,item)
    }
    this.delete = function (index) {
        console.log("params")
        fs.deleteJson(index)
    }
    this.getList=function (callback) {
        callback()
    }


}
module.exports = dbOperations;