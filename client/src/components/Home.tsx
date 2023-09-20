import { useState } from "react"
import Chat from "./Chat"
import { ContactList } from "./ContactList"

export function Home() {
  const [room, setRoom] = useState("Global")

  return (
    <>
      <div>current room: {room}</div>
      <ContactList setRoom={setRoom} />
      <Chat room={room} />
    </>
  )
}
