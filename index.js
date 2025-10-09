const express = require("express");
const { createServer } = require("node:http");
// we are creating server using http moudle 
const { Server } = require("socket.io");
// used to create socket server 
const app = express();
app.use(express.static("public"));
const server = createServer(app);
const io = new Server(server); // this command is used to create socket.io server

// base url which send index.html file to client
app.get("/", (req, res) => {
  return res.sendFile("index.html");
});

// creating an io event 
io.on('connection',(socket)=>{
  console.log('A user is connected',socket.id)
  // here message is the key which is passed from the client side 
  socket.on('message',(clientMsg)=>{
    console.log('client message ',clientMsg)
    io.emit('message',clientMsg);
  })
})

server.listen(3000, () => {
  console.log("server is listening on the port 3000 ");
});
