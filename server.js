const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const funAsync = require('./func_socket.js');
var app = express();
const cors = require('cors');

var corsOptions = {
  origin: '*'
}

app.use(cors(corsOptions))

app.get('/getStudents',async (req,res)=>{
  let ans=await funAsync.getAllStud();
  res.send(ans);
  
})

// app.get('/insertStudents',async (req,res)=>{
//   name=req.query.name; 
//   age=req.query.age; 
//   mail=req.query.mail; 
//   let ans=await funAsync.insertStud(name,age,mail);
//   res.send(ans);
  
// })
// // our localhost port
const port = 4002

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)


// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('New client connected')

  // just like on the client side, we have a socket.on method that takes a callback function
  socket.on('insert student', async (name,age,mail) => {
    // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
    // we make use of the socket.emit method again with the argument given to use from the callback function above
    let InsStud = await funAsync.insertStud(name,age,mail);

    io.sockets.emit('insert student', InsStud)
  })

  // disconnect is fired when a client leaves the server
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

// `socket` is the server side of the socket
server.listen(port, () => console.log(`Listening on port ${port}`))


// /const client = require('socket.io-client')('http://localhost:' + port);













// app.get('/red',(req,res)=>{
  
//   server.on('connection', (socket) => {
//     // this will be triggered by client sides emitting 'create'
//     socket.on('change color', (data) => {
//       console.log('a client socket just fired a "create" event!');
//     });
//     console.log("Send first time : ")
//     client.on('create', (data) => {
//       server.emit('change color', 'orange');
//     });
//   });

//   res.send();
// })