import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
})

io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`)
  socket.join("Global")

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`)
  })

  socket.on("message", (data) => {
    socket.to(data.room).emit("message", data)
    console.log(data)
  })

  socket.on("join-room", (room) => {
    socket.join(room)
  })
})

httpServer.listen(3000)
