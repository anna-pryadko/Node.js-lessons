const express = require('express');
var app = express();
const cors = require('cors');
//const products = require('./Products.js');
const products = require("./findProduct.js");

var corsOptions = {
  origin: '*'
}

//students.printStudentName('shay',"llll");
app.use(cors(corsOptions))

app.get('/searchProducts',(req,res)=>{
    let p = req.query.id;
    let netres=students.getPage(p);
    res.send(netres);
})


app.get('/getAllStudents',(req,res)=>{
    //res.send('Hello Express !!');
    //res.send('<h1>Hello Express !!</h1>');
    //let students = go to db and select all students
    let student = {name:'shay1111',age:"39"}
    res.send(student);
})

app.get('/getStudent',(req,res)=>{
    let name = req.query.name;
    let phone = req.query.phone;

    //res.send('Hello Express !!');
    //res.send('<h1>Hello Express !!</h1>');
    res.send("Name : " + name + "  Phone : " + phone);
})

app.get('/returnToReact',(req,res)=>{
    let p = req.query.id;
    let netres=students.getPage(p);
    res.send(netres);
})

// app.get('/returnToReact',(req,res)=>{
//     let p = req.query.id;
//     if (p=="p1") {
//     res.send("p1");
//     }

//     if (p=="p2") {
//     res.send("p2");
//         }
   
//     if (p=="p3") {
//     res.send("p3");
//     } 
    
//     if (p=="p4") {
//     res.send("p4");
//     }
// })

// app.get('/p1',(req,res)=>{
//     res.send("p1");
// })

// app.get('/p2',(req,res)=>{
//     res.send("p2");
// })

// app.get('/p3',(req,res)=>{
//     res.send("p3");
// })

// app.get('/p4',(req,res)=>{
//     res.send("p4");
// })


app.listen(5000);