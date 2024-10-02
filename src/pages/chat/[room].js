import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

let socket;

export default function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socketInitializer();
    return () => {
      if (socket) socket.disconnect();
    };
  }, [roomId]);

  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io();

    socket.on('connect', () => {
      console.log('Connected to server');
      socket.emit('join-room', roomId);
    });

    socket.on('message', (message) => {
      setMessages((prev) => [...prev, message]);
    });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (inputMessage.trim()) {
      socket.emit('message', { text: inputMessage, room: roomId });
      setInputMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <div className="flex-grow overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className="bg-gray-800 p-2 rounded-lg">
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 bg-gray-800">
        <div className="flex">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message..."
            className="flex-grow px-3 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none"
          />
          <button 
            onClick={sendMessage} 
            className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}