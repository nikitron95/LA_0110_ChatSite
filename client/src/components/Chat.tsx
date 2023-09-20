import React, { FormEvent, useEffect, useState } from "react";
import { socket } from "../lib/socket";

function App() {
  const [message, setMessage] = useState("");
  const [chatHistory, setHistory] = useState([""]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newMessage = e.currentTarget.message.value;
    socket.emit("message", newMessage);
    e.currentTarget.message.value = "";
  }

  useEffect(() => {
    socket.on("message", (data) => {
      setHistory((prevHistory) => [...prevHistory, data]); 
      setMessage(data);
    });
  }, []);

  return (
    <div>
      {chatHistory.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Message" name="message" />
        <button type="submit">Send</button>
      </form>
      <div>{message}</div>
    </div>
  );
}

export default App;
