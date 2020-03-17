var fileUtil=require("./fileUtil")
var fs=new fileUtil()
function dbOperations() {
    console.log("db module loaded");
    console.log(fs)
    function getList(params) {
        console.log(fs.getList)
    }
    

}
module.exports = dbOperations;