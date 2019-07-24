const express=require('express');

var app=express();
const cors=require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }
  
  app.use(cors(corsOptions))

app.get('/P1',(req,res)=>{
    res.send({name:"shay",age:"39"});
})

app.get('/P2',(req,res)=>{
    res.send({name:"anna",age:"38"});
})

app.get('/P3',(req,res)=>{
    res.send({P1:"This is page 1"});
})

app.get('/P4',(req,res)=>{
    res.send({P2:"This is page 1"});
})
app.listen(4000);