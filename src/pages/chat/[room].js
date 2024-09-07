import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import io from 'socket.io-client';

let socket;

export default function ChatRoom() {
  const router = useRouter();
  const { room } = router.query; // Get the room name from the URL
  const [message, setMessage] = useState(''); // Current message being typed
  const [messages, setMessages] = useState([]); // All messages in the chat room

  useEffect(() => {
    // Connect to the Socket.IO server
    socket = io();

    // Listen for incoming messages
    socket.on('receiveMessage', (messageData) => {
      setMessages((prevMessages) => [...prevMessages, messageData]);
    });

    return () => {
      socket.disconnect(); // Clean up on component unmount
    };
  }, []);

  // Function to handle sending a message
  const sendMessage = () => {
    if (message.trim()) {
      const messageData = { room, message }; // You can also add user info here
      socket.emit('sendMessage', messageData); // Send the message to the server
      setMessages((prevMessages) => [...prevMessages, messageData]); // Update local state
      setMessage(''); // Clear the input field
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Welcome to the {room} Room</h1>
        <p className="mt-4 text-gray-400">Start chatting with others in the {room} room.</p>
      </header>

      {/* Chat Messages */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4 min-h-[400px] overflow-y-scroll">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <strong>{msg.room}: </strong> {msg.message}
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="flex items-center">
        <input
          type="text"
          className="w-full bg-gray-700 text-gray-200 p-4 rounded-lg mr-2"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()} // Send on Enter key press
        />
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
