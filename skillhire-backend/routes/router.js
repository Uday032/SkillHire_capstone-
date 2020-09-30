

module.exports= app=>{
    const cors = require("cors");
    const register = require("../models/registration.js");
    const express=  require("express");
    const route = express.Router();
    signup_route = require("../controllers/register.controller.js");
    route.use(cors());

    route.post('/',signup_route.signup);
    route.get('/allusers',signup_route.allusers);

    app.use('/users/signup', route);
}


