import { FormEvent, useEffect, useState } from "react";
import { socket } from "./lib/socket"

function App() {
  const [message, setMessage] = useState("")

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const message = e.currentTarget.message.value
    socket.emit("message", message)
    setMessage(message)
  }

  useEffect(() => {
    socket.on("message", data => {
      setMessage(data)
    })
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Message" name="message" />
        <button>Send</button>
      </form>
      <div>{message}</div>
      {/* <Login/>
    <ChattingPage/> */}
    </div>
  );
}
export default App;
