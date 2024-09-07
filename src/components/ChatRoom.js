// components/ChatRoom.js
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Message from './Message';

// Create a socket instance (make sure this is outside of the component)
let socket;

export default function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Connect to the socket server
    socket = io();

    // Listen for incoming messages
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.disconnect(); // Disconnect when component unmounts
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      // Emit the message to the server
      socket.emit('chat message', { sender: 'You', content: newMessage });
      setNewMessage(''); // Clear the input field
    }
  };

  return (
    <div className="p-6">
      <div className="bg-gray-200 p-4 rounded-lg h-64 overflow-y-scroll">
        {/* Render each message */}
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} content={msg.content} />
        ))}
      </div>

      {/* Chat input field */}
      <div className="mt-4 flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="border rounded-lg w-full p-2 mr-2"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
}
