const register = require("../models/registration.js");

exports.signup = (req,res) =>{
    const today_date = new Date();
    userdata = {
        google_id:req.body.google_id,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        full_name: req.body.full_name,
        email: req.body.email,
        created:today_date
    };
    
    register.findOne({
        where:{
            email:req.body.email
        }
    }).then(user=>{
        
        if(!user){
            register.create(userdata).then(
                data=>{
                    console.log("Successfully crraeted");
                    res.send(data);
                }
            ).catch(err=>{
                res.send("error = "+err);
            })
        }

        else{
            res.send("User already cerated");
        }
    }).catch(()=>console.log("User already created"))
    
}

exports.allusers=(req,res)=>{

    register.findAll({
        attributes:{
            include:['*']
        }
    }).then(all=>{
        res.send(all);
    }).catch(()=>console.log('cannnot retrieve all users'))
}


