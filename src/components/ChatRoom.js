import { useEffect, useState } from 'react';
import io from 'socket.io-client'; // Ensure socket.io is set up
let socket;

export default function ChatRoom() {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingStatus, setTypingStatus] = useState(''); // To display typing status

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io();

    // Listen for the typing event from server
    socket.on('displayTyping', (data) => {
      setTypingStatus(data ? `${data.username} is typing...` : '');
    });
  };

  // Emit typing event when the user types in the message input
  const handleTyping = () => {
    socket.emit('typing', { username: 'User1', typing: true });
    setTimeout(() => {
      socket.emit('typing', { username: 'User1', typing: false });
    }, 2000); // Emit false after 2 seconds of no typing
  };

  return (
    <div className="chat-room">
      <div className="messages">
        {/* Display messages here */}
      </div>
      
      {/* Typing indicator */}
      <p className="text-gray-500">{typingStatus}</p>

      {/* Message input */}
      <input
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          handleTyping(); // Call handleTyping when user types
        }}
        placeholder="Type your message..."
        className="input"
      />
    </div>
  );
}
