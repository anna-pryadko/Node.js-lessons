const express = require('express');
var app = express();
const cors = require('cors');

var corsOptions = {
    origin: '*'
  }
  
  app.use(cors(corsOptions))
  
  var mysql=require('mysql');
  
  var con=mysql.createConnection({
      host:"localhost",
      port: 8889,
      user:"root",
      password:"root",
      database:"students"
  });

module.exports.getAllStudents=()=>{
    return new Promise(function(resolve,reject){
    con.query(`SELECT * FROM All_student`, function(err,result,fields){
        if (err) throw err;
        resolve(result);
    });
  });
}

// module.exports.foundGamesByCat=(category)=>{
//     return new Promise(function(resolve,reject){
//     con.query(`SELECT * FROM games WHERE Category='${category}'`, function(err,result,fields){
//         if (err) throw err;
//         resolve(result);
//     });
//   });
// }

module.exports.addStudent=(name,mail,age)=>{
    //console.log("func: ",name,mail) 
    return new Promise(function(resolve,reject){
        
    con.query(`INSERT INTO All_student (name,mail,age) VALUES ('${name}','${mail}',${age})`, async function(err,result,fields){
        if (err) throw err;
        resolve(result);
    });
  });
}

// module.exports.getReviews=(gameIdReviews)=>{
//     //console.log("func: ",name,mail) 
//     return new Promise(function(resolve,reject){
        
//     con.query(`SELECT * FROM reviews WHERE gameId=${gameIdReviews}`, async function(err,result,fields){
//         if (err) throw err;
//         resolve(result);
//     });
//   });
// }
