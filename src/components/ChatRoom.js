// components/ChatRoom.js
import { useState } from 'react';
import Message from './Message';

export default function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([
    { sender: 'User1', content: `Welcome to the ${roomId} room!` },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const updatedMessages = [
        ...messages,
        { sender: 'You', content: newMessage },
      ];
      setMessages(updatedMessages);
      setNewMessage(''); // Clear input after sending
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
