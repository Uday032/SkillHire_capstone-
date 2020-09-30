dbconfig = require("../config/db.config.js")
var mysql  =require("mysql");

var con = mysql.createConnection({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB
  });
  
con.connect(function(err) {
if (err){
    throw err;
}
var sql = 
console.log("Connected!");
});

module.exports = con;