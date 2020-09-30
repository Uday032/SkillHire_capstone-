const express = require('express')
const cors    = require('cors')
const bodyParser = require("body-parser")

var port = 5000;
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))

dbconfig = require("./config/db.config.js");
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

global.con = con;



//const db = require("./models/registration.js");
//db.sequelize.sync({ force: true }).then(() => {
    //console.log("Drop and re-sync db.");
  //});

//const registration = require('./routes/router.js');

//app.use('/',registration);
//require("./routes/router.js")(app)
require("./routes/routersql.js")(app)
app.listen(port,function(){
    console.log("Server is running on port "+port);
})








