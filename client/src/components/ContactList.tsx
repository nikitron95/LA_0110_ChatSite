import { socket } from "../lib/socket"

interface ContactListProps {
  setRoom: React.Dispatch<React.SetStateAction<string>>
}

export function ContactList({ setRoom }: ContactListProps) {
  return (
    <>
      <button
        onClick={() => {
          setRoom("Elvis")
          socket.emit("join-room", "Elvis")
        }}
      >
        Elvis
      </button>
      <button
        onClick={() => {
          setRoom("Julian")
          socket.emit("join-room", "Julian")
        }}
      >
        Julian
      </button>
      <button
        onClick={() => {
          setRoom("Anto")
          socket.emit("join-room", "Anto")
        }}
      >
        Anto
      </button>
      <button
        onClick={() => {
          setRoom("Nikola")
          socket.emit("join-room", "Nikola")
        }}
      >
        Nikola
      </button>
      <button
        onClick={() => {
          setRoom("Global")
          socket.emit("join-room", "Global")
        }}
      >
        Global
      </button>
    </>
  )
}
