const express=require('express');
const hbs=require('hbs');
var app=express();

app.set('view engine','hbs');

app.get('/about',(req,res)=>{
    res.render('test.hbs',{title:"About page  "});
});

app.listen(3000,()=>{console.log('Server in uo in port 3000');
});