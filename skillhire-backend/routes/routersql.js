module.exports= app=>{
    const cors = require("cors");
    //const register = require("../models/registration.js");
    //const createdb = require("../database/dbsql1.js");
    const registersql = require("../models/registrationsql.js");
    //const con  = require("../database.dbsql.js");
    const express=  require("express");
    const route = express.Router();
    //signup_route = require("../controllers/register.controller.js");
    const signupsql_route = require("../controllers/registersql.controller.js")
    route.use(cors());

    route.post('/',signupsql_route.create_registration);
    route.get('/allusers',signupsql_route.fetch_all_users);

    app.use('/users/signup', route);
}
