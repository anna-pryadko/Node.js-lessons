const express = require('express');
var app = express();
const cors = require('cors');
const funAsync = require('./func_games.js');

var corsOptions = {
  origin: '*'
}

app.use(cors(corsOptions))

app.get('/getAllGames',async (req,res)=>{
  let ans=await funAsync.getAllGames();

  res.send(ans);
  
})

app.get('/foundGamesByCat',async (req,res)=>{
    let category=req.query.category;
    let ans=await funAsync.foundGamesByCat(category);
  
    res.send(ans);
    
  })

app.get('/addReviews',async (req,res)=>{
    let userName=req.query.userName;
    let comment=req.query.comment;
    let gameId=req.query.gameId;
    console.log(userName,comment,gameId); 
    let ans=await funAsync.addReviews(userName,comment,gameId);
    console.log(ans);  
    res.send(ans);
    
  })

  app.get('/getReviews',async (req,res)=>{
    let gameIdReviews=req.query.gameIdReviews;
    let ans=await funAsync.getReviews(gameIdReviews);
  
    res.send(ans);
    
  })

 
app.listen(5000);