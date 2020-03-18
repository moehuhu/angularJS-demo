var fileUtil = require("./fileUtil")
var fs = new fileUtil()
function dbOperations() {
    console.log("db module loaded");
    this.create = function (params) {
        console.log("params")
        fs.writeJson(params)
    }
    this.update = function (params) {
        console.log("params")
        fs.writeJson(params)
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