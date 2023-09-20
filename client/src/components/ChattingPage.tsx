import  { useState } from "react"
import { FormEvent } from "react"

export function ChattingPage() {
  const [message, setMessage] = useState("")

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

  
    const formData = new FormData(e.currentTarget);
    const message = formData.get("message") as string


    setMessage(message);
    

    console.log(message)
    
  };

  return (
    <>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          name="message" 
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
      <p>Message: {message}</p>
    </>
  );
}
