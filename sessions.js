var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'somerandonstuffs',
    resave: false,
    // resave: true,
    saveUninitialized: false,
}));

const cors = require('cors');

var corsOptions = {
  optionsSuccessStatus: 200,
  allowedHeaders:['sessionId','Content-Type'],
  exposedHeaders:['sessionId'],
  credentials:true,
  //origin: '*',
  origin:['http://localhost:3001'],
}

app.use(cors(corsOptions))


app.get('/login', function (req, res) {
    req.session.name = req.query.name;       //params['email']; 
    req.session.password = req.query.password; //params['password'];
    console.log(req.session)
    res.send(JSON.stringify("1")); 
    //res.send(req.session.name + ":" + req.session.password)
    // res.end('')
})

app.get('/logged', function (req, res) {
    console.log(req.session)
    if (req.session.name && req.session.password) {
        console.log("session connected");
        res.send(JSON.stringify("1")); 
    }
    else
        console.log("session not connected");
        res.send(JSON.stringify("0")); 
    // res.end()
})

app.get('/Logout', function (req, res) {
    req.session.destroy();

  let ans = "Log out";
  console.log("Log out");
  res.send(ans);
})

app.listen(4000, function () {
    console.log("Server Start");
})