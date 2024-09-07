// pages/create-room.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function CreateRoom() {
  const [roomName, setRoomName] = useState(''); // To store the new room name
  const router = useRouter();

  // Function to handle creating a new room
  const handleCreateRoom = () => {
    if (!roomName.trim()) {
      alert('Please enter a valid room name');
      return;
    }
    // Navigate to the newly created room (e.g., /chat/room-name)
    router.push(`/chat/${roomName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Create a New Chat Room</h1>
        <p className="text-gray-600 mb-6">
          Enter a name for the new chat room and invite others to join!
        </p>

        {/* Input for the room name */}
        <input
          type="text"
          className="w-full p-3 bg-gray-200 rounded-lg mb-4"
          placeholder="Enter room name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />

        {/* Create Room Button */}
        <button
          onClick={handleCreateRoom}
          className="bg-blue-500 text-white w-full py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Create Room
        </button>
      </div>
    </div>
  );
}
