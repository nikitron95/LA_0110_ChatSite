import React, { FormEvent, useEffect, useState } from "react"
import { socket } from "../lib/socket"

interface ChatProps {
  room: string
}

type Message = {
  room: string
  content: string
}

function Chat({ room }: ChatProps) {
  const [chatHistory, setHistory] = useState<Message[]>([])
  const [filteredHistory, setFilteredHistory] = useState<Message[]>([])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const newMessage = e.currentTarget.message.value
    socket.emit("message", { room, content: newMessage })

    e.currentTarget.reset()
  }

  useEffect(() => {
    socket.on("message", (data) => {
      setHistory((prevHistory) => [...prevHistory, data])
      console.log(data)
    })
  }, [])

  useEffect(() => {
    setFilteredHistory(chatHistory.filter((message) => message.room === room))
  }, [chatHistory, room])

  return (
    <div>
      {filteredHistory.map((message, index) => (
        <div key={index}>{message.content}</div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Message" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Chat
