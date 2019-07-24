//const express = require('express');
//var app = express();
//const cors = require('cors');
//const searchProducts = require('./SearchProducts.js');

// var corsOptions = {
//   origin: '*'
// }

// app.use(cors(corsOptions))
var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    port: 8889,
    user:"root",
    password:"root",
    database:"students"
});

con.query(`SELECT * FROM all_student WHERE age>=29 AND age<=30`, function(err,result,fields){
    if (err) throw err;
    res=result;
    console.log(JSON.stringify(res));
});

//app.listen(5000);