const express=require('express');
const hbs=require('hbs');

hbs.registerPartials(__dirname+'/views/partials')
var app=express();

const funAsync = require('./func_async.js');

app.set('view engine','hbs');

app.get('/',async (req,res)=>{
    let ans=await funAsync.getInfo();
    res.render('test.hbs',{
        ans:ans,     
    });   
  })

app.get('/',(req,res)=>{
    res.render('test.hbs',{
        pageTitle:'Home Page',
        welcomeMassege:'Welcome to my website'
    });
});

app.get('/about',(req,res)=>{
    res.render('test.hbs',{title:"About page  "});
});

app.listen(3000,()=>{console.log('Server is up in port 3000');
});