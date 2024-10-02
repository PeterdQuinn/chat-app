import { useState, useEffect } from 'react';
import io from 'socket.io-client';

let socket;

export default function ChatRoom() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket = io(); // Initialize socket connection

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    // Listen for incoming messages
    socket.on('message', (messageData) => {
      setChat((prevChat) => [...prevChat, messageData]);
    });

    // Clean up on component unmount
    return () => socket.disconnect();
  }, []);

  // Function to send messages
  const sendMessage = () => {
    if (message.trim()) {
      const messageData = { user: 'User1', text: message }; // Customize user info
      socket.emit('message', messageData); // Emit to server
      setChat((prevChat) => [...prevChat, messageData]); // Add to local chat
      setMessage(''); // Clear input
    }
  };

  return (
    <div className="chat-room">
      <div className="messages">
        {chat.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}
