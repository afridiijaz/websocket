const express = require("express");
const { createServer } = require("node:http");
// we are creating server using http moudle 
const { Server } = require("socket.io");
// used to create socket server 
const app = express();
app.use(express.static("public"));
const server = createServer(app);
const io = new Server(server);
app.get("/", (req, res) => {
  return res.sendFile("index.html");
});
server.listen(3000, () => {
  console.log("server is listening on the port 3000 ");
});
