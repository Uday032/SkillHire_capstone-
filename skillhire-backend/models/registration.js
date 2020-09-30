const Sequelize = require('sequelize');
//const { sequelize } = require('../database/db.js');
const db = require("../database/db.js");
module.exports = db
module.exports = db.sequelize.define(
    'Registration',
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:true,
        },
        google_id:{
            type: Sequelize.STRING
        },
        first_name:{
            type:Sequelize.STRING
        },
        last_name:{
            type:Sequelize.STRING
        },
        full_name:{
            type:Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING
        },
        system_id:{
            type:Sequelize.STRING
        },
        profile_image:{
            type:Sequelize.STRING,
            defaultValue:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F592082682238407617%2F&psig=AOvVaw1KLF6WoZUIRV-qO9PMcfCY&ust=1600090902527000&source=images&cd=vfe&ved=2ahUKEwiuw4ygoebrAhWr8jgGHY0YDNsQjRx6BAgAEAc"
        },
        created:{
            type:Sequelize.DATE,
            defaultvalue:Sequelize.NOW
        }

    }
)
