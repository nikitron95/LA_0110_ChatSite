import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { 
  cors: {
    origin: "*"
  }
 });

io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`)

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`)
  })

  socket.on("message", message => {
    console.log(`Socket sent message: ${message}`)
    socket.broadcast.emit("message", message)
  })
});

httpServer.listen(3000);