
var mysql  =require("mysql");
//const { ConnectionError } = require("sequelize/types");
/*
const drop = "DROP TABLE IF EXISTS Registrations";
let table_name = "";
con.query(drop,function(err,result){
    if(err) throw err;
    const sql = "CREATE TABLE IF NOT EXISTS Registrations (id INTEGER auto_increment, google_id VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255),email VARCHAR(255) NOT NULL, system_id VARCHAR(255), user_type VARCHAR(255) DEFAULT 'STUDENT' ,profile_image VARCHAR(255) DEFAULT 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F592082682238407617%2F&psig=AOvVaw1KLF6WoZUIRV-qO9PMcfCY&ust=1600090902527000&source=images&cd=vfe&ved=2ahUKEwiuw4ygoebrAhWr8jgGHY0YDNsQjRx6BAgAEAc', created DATETIME NOT NULL, updatedAt DATETIME NOT NULL, PRIMARY KEY (id))";
    //table_name = "Registrations";
    //console.log(result);
    con.query(sql,(err,result)=>{
        if(err) throw err;
        else{
            console.log("Registrations Table created Successfully");
        }
    })
    
});
*/

const sql = "CREATE TABLE IF NOT EXISTS Registrations (id INTEGER auto_increment, google_id VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255),email VARCHAR(255) NOT NULL, user_type VARCHAR(255) DEFAULT 'STUDENT' ,profile_image VARCHAR(255) DEFAULT 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F592082682238407617%2F&psig=AOvVaw1KLF6WoZUIRV-qO9PMcfCY&ust=1600090902527000&source=images&cd=vfe&ved=2ahUKEwiuw4ygoebrAhWr8jgGHY0YDNsQjRx6BAgAEAc', created DATETIME NOT NULL, updatedAt DATETIME NOT NULL, PRIMARY KEY (id))";
    //table_name = "Registrations";
    //console.log(result);
    con.query(sql,(err,result)=>{
        if(err) throw err;
        else{
            console.log("Registrations Table created Successfully");
        }
});


let studentsql = `CREATE TABLE IF NOT EXISTS Students(student_id INTEGER auto_increment, id INTEGER NOT NULL, contact VARCHAR(255) NOT NULL, about  TEXT, colleges VARCHAR(255),college_end_date DATE, companies VARCHAR(255),detailsfilled BOOLEAN, PRIMARY KEY (student_id), FOREIGN KEY (id) REFERENCES Registrations(id))`;

con.query(studentsql,(err,result)=>{
    if(err) throw err;
    console.log("Students table created");
});

let skilltagsql = "CREATE TABLE IF NOT EXISTS Student_Skills (student_id INTEGER NOT NULL , Skill_name VARCHAR(255), FOREIGN KEY (student_id) REFERENCES Students(student_id))";
con.query(skilltagsql,(err,result)=>{
    if(err) throw err;
    else{
        console.log("Students Skill Table Created");
    }
});

let stud_proj_sql = "CREATE TABLE IF NOT EXISTS Student_Projects ( project_id INTEGER auto_increment, student_id INTEGER NOT NULL , Title VARCHAR(255) NOT NULL, Description TEXT, Start_date DATE, End_date DATE, Location VARCHAR(255),ongoing BOOLEAN, Github VARCHAR(255), Blog VARCHAR(255), PRIMARY KEY (project_id), FOREIGN KEY (student_id) REFERENCES Students(student_id))";
con.query(stud_proj_sql,(err,result)=>{
    if(err) throw err;
    else{
        console.log("Project Table Created");
    }
});

let stud_company_sql = "CREATE TABLE IF NOT EXISTS Student_Experience ( experience_id INTEGER auto_increment, student_id INTEGER NOT NULL ,Company_name VARCHAR(255), Title VARCHAR(255) NOT NULL, Description TEXT, Start_date DATE, End_date DATE, Location VARCHAR(255),ongoing BOOLEAN, Github VARCHAR(255), Blog VARCHAR(255), PRIMARY KEY (experience_id), FOREIGN KEY (student_id) REFERENCES Students(student_id))";
con.query(stud_company_sql,(err,result)=>{
    if(err) throw err;
    else{
        console.log("Experience Table Created");
    }
});

let companies_sql = "CREATE TABLE IF NOT EXISTS Companies (company_id INTEGER AUTO_INCREMENT, id INTEGER NOT NULL, company_name VARCHAR(255), company_location VARCHAR(255),comapany_about TEXT, hr_contact VARCHAR(255),hr_company_email VARCHAR(255),company_website VARCHAR(255), company_twitter VARCHAR(255), company_linkedin VARCHAR(255), company_logo VARCHAR(255), detailsfilled BOOLEAN, PRIMARY KEY (company_id), FOREIGN KEY (id) REFERENCES Registrations(id)) ";
con.query(companies_sql,(err,result)=>{
    if(err) throw err;
    else{
        console.log("Companies table created");
    }
});

let job_postings_sql = "CREATE TABLE IF NOT EXISTS Job_Postings (job_id INTEGER AUTO_INCREMENT, company_id INTEGER NOT NULL, job_title VARCHAR(255), job_description TEXT, job_location VARCHAR(255), job_salary_range VARCHAR(255), job_tags TEXT, PRIMARY KEY (job_id), FOREIGN KEY (company_id) REFERENCES Companies(company_id)) ";
con.query(job_postings_sql,(err,result)=>{
    if(err) throw err;
    else{
        console.log("Job Postings table created");
    }
});




