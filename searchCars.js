const express = require('express');
var app = express();
const cors = require('cors');
const funAsync = require('./funcAsyncSearchCars.js');

var corsOptions = {
  origin: '*'
}

app.use(cors(corsOptions))

app.get('/getAllCars',async (req,res)=>{
  let ans=await funAsync.getAllCars();
  res.send(ans);
  
})

// app.get('/searchCarByName',async (req,res)=>{
//     let searchName=req.query.searchName 
//     let ans=await funAsync.searchCarByName();
//     res.send(ans);
    
//   })

//   app.get('/searchCarByPrice',async (req,res)=>{
//     let ans=await funAsync.searchProd2();
//     res.send(ans);
    
//   })

//   app.get('/searchProductsById',async (req,res)=>{
//     let searchId=req.query.id  
//     let ans=await funAsync.searchProd3(searchId);
//     res.send(ans);
    
//   })

// app.get('/insertProduct',async (req,res)=>{
//     let ans=await funAsync.insProd();
//     res.send(ans);
    
// }) 

// app.get('/deleteProduct',async (req,res)=>{
//     let ans=await funAsync.delProd();
//     res.send(ans);
    
// }) 

// app.get('/updateProduct',async (req,res)=>{
//     let ans=await funAsync.updProd();
//     res.send(ans);
    
// }) 

app.listen(5000);