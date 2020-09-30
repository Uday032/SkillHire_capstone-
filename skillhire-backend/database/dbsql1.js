dbconfig = require("../config/db.config.js")
//console.log("dbconfig"+dbconfig[0]);
var mysql  =require("mysql");


var con = mysql.createConnection({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB
  });

con.connect((err)=>{
if (err){
    throw err;
}
console.log("Connected!");
});
//exports.con = con;
/*
var sql = "CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255))";
con.query(sql,(err,result)=>{
    if(err) throw err;
    console.log("Inside");
    var sql_insert = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql_insert,(err,result)=>{
        if(err) throw err;
        console.log("Value inserted");
        console.log(result);

    })
})

var firstq = "SELECT * from CUSTOMERS WHERE name = 'Company Inc'";
con.query(firstq,(err,result)=>{
    if(err) throw err; 
    console.log("fecth");
    console.log(result);
})

*/
