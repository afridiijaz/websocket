const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const app = express();
app.use(express.static("public"));

const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  return res.sendFile("index.html");
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Store username on join
  socket.on('user-joined', (username) => {
    socket.username = username;
    // Notify everyone ELSE
    socket.broadcast.emit('user-joined', username);
    console.log(`${username} joined the chat`);
  });

  // { text, sender } message object
  socket.on('message', (data) => {
    console.log(`[${data.sender}]: ${data.text}`);
    // Broadcast to all OTHER clients (sender appends their own bubble client-side)
    socket.broadcast.emit('message', data);
  });

  socket.on('disconnect', () => {
    if (socket.username) {
      io.emit('user-left', socket.username);
      console.log(`${socket.username} disconnected`);
    }
  });
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

