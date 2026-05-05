const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  socket.on("join", (room) => {
    socket.join(room);
  });

  socket.on("code-change", ({ room, code }) => {
    socket.to(room).emit("code-update", code);
  });

  socket.on("send-message", ({ room, msg }) => {
    io.to(room).emit("receive-message", msg);
  });
});

server.listen(5000, () => console.log("Server running"));
