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
          socket.emit("join-room", "Room 1")
        }}
      >
        Room 1
      </button>
      <button
        onClick={() => {
          setRoom("Julian")
          socket.emit("join-room", "Room 2")
        }}
      >
        Room 2
      </button>
      <button
        onClick={() => {
          setRoom("Anto")
          socket.emit("join-room", "Room 3")
        }}
      >
        Room 3
      </button>
      <button
        onClick={() => {
          setRoom("Nikola")
          socket.emit("join-room", "Room Niger")
        }}
      >
        Room Niger
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
