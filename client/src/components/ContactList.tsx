import { socket } from "../lib/socket"

interface ContactListProps {
  setRoom: React.Dispatch<React.SetStateAction<string>>
}

export function ContactList({ setRoom }: ContactListProps) {
  return (
    <>
      <button
        onClick={() => {
          setRoom("Room 1")
          socket.emit("join-room", "Room 1")
        }}
      >
        Room 1
      </button>
      <button
        onClick={() => {
          setRoom("Room 2")
          socket.emit("join-room", "Room 2")
        }}
      >
        Room 2
      </button>
      <button
        onClick={() => {
          setRoom("Room 3")
          socket.emit("join-room", "Room 3")
        }}
      >
        Room 3
      </button>
      <button
        onClick={() => {
          setRoom("Room 4")
          socket.emit("join-room", "Room 4")
        }}
      >
        Room 4
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
