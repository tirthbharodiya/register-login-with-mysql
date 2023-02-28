const mysql = require("mysql");

var conn = mysql.createConnection({ //Creating a connection with the database
    host:"localhost",
    user:"root",
    password:"",
    database:"thinkhp_base"
})

module.exports = conn;