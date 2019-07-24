const express = require('express');
var app = express();
const cors = require('cors');
const funAsync = require('./funcStudents.js');

var corsOptions = {
  origin: '*'
}

app.use(cors(corsOptions))

app.get('/getAllStudents',async (req,res)=>{
  let ans=await funAsync.getAllStudents();

  res.send(ans);
  
})

// app.get('/foundGamesByCat',async (req,res)=>{
//     let category=req.query.category;
//     let ans=await funAsync.foundGamesByCat(category);
  
//     res.send(ans);
    
//   })

app.get('/addStudent',async (req,res)=>{
    let name=req.query.name;
    let mail=req.query.mail;
    let age=req.query.age;
    console.log(name,mail,age); 
    let ans=await funAsync.addStudent(name,mail,age);
    console.log(ans);  
    res.send(ans);
    
  })

  app.get('/getReviews',async (req,res)=>{
    let gameIdReviews=req.query.gameIdReviews;
    let ans=await funAsync.getReviews(gameIdReviews);
  
    res.send(ans);
    
  })

 
app.listen(5000);