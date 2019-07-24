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

  module.exports.getAllStud=()=>{
    return new Promise(function(resolve,reject){
    con.query(`SELECT * FROM all_student`, async function(err,result,fields){
        if (err) throw err;
        resolve(result);
    });

  });
}

module.exports.insertStud=(name,age,mail)=>{
  return new Promise(function(resolve,reject){
    let lastInsId;

    con.query(`INSERT INTO all_student (name,age,mail) VALUES ('${name}','${age}','${mail}')`, async function(err,result,fields){
      if (err) throw err;
      // console.log("result: ",result)
      lastInsId=result.insertId;
      console.log("lastInsId: ",lastInsId)
      resultNew= await GetLastInsert(lastInsId);
      console.log("resultNew: ",resultNew)
      resolve(resultNew);
  });
});
}

GetLastInsert=(lastInsId)=>{
  return new Promise(function(resolve,reject){
  con.query(`SELECT * FROM all_student WHERE id=${lastInsId}`, function(err,result,fields){
  if (err) throw err;

  resolve(result);
  });
});
}

module.exports.getAllStud=()=>{
  return new Promise(function(resolve,reject){
  con.query(`SELECT * FROM all_student`, function(err,result,fields){
      if (err) throw err;
      resolve(result);
  });
});
}
