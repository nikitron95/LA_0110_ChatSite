import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

interface Message {
  text: string;
  // Weitere Nachrichtenattribute hier hinzufügen, wenn nötig
}

const ChatApp = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const socket = io(); // Stellen Sie sicher, dass Sie die richtige Server-URL verwenden

  // Nachrichten empfangen und im State speichern
  useEffect(() => {
    socket.on('message', (message: Message) => {
      setMessages((prevMessages: Message[]) => [...prevMessages, message]);
    });

    // Aufräumen, wenn die Komponente unmontiert wird
    return () => {
      socket.disconnect();
    };
  }, []);

  // Nachricht senden
  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      socket.emit('message', { text: newMessage });
      setNewMessage('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.text}</div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Ihre Nachricht eingeben"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Senden</button>
    </div>
  );
};

export default ChatApp;
