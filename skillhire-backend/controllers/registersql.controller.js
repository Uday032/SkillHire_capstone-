
var mysql  =require("mysql");
const bcrypt = require("bcrypt");

exports.create_registration = (req,res)=>{
    //console.log("craete registration");
    const today_date = new Date();
    console.log("Request body = "+req.body);
    let userdata = {
        google_id:req.body.google_id,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email: req.body.email,
        profile_image : req.body.profile_img,
        //system_id:req.body.google_id+req.body.first_name,
        created:today_date,
        updatedAt:today_date
    };
    const check_email = "SELECT * FROM Registrations WHERE email= ?";
    let emailid = req.body.email;
    con.query(check_email,emailid,(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            //console.log("hashing started");
            //const hashedPassword = bcrypt.hashSync(userdata.system_id, 10);
            //userdata.system_id = hashedPassword;
            /* Asynchronous calling hashing function
            bcrypt.hash(userdata.system_id, 10, function(err, hash) {
                // Store hash in database
                if(err) return err;
                console.log("Hash value");
                console.log("Asunchronous hash value = "+hash);
                userdata.system_id = hash;
              });
            */
            const sql = "INSERT INTO Registrations SET ?";
            con.query(sql,userdata,(err,result)=>{
                if(err) throw err;
                console.log("Credentials saved in database");
                res.send(userdata);

            })
        }
        else{
            res.send("Already details saved, Welcome!!")
        }
    })
}

exports.fetch_all_users = (req,res)=>{
    const sql = "Select * FROM Registrations";
    con.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })

}
    
