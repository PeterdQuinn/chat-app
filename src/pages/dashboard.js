import Navbar from '../components/Navbar'; // Import the Navbar component
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter for navigation

export default function Dashboard() {
  const rooms = ['JavaScript', 'Python', 'React', 'Machine Learning', 'DevOps'];
  const [newRoom, setNewRoom] = useState('');
  const router = useRouter(); // Set up router for redirecting

  // Function to handle room creation
  const handleCreateRoom = () => {
    if (newRoom.trim()) {
      // Redirect to the newly created room
      const formattedRoom = newRoom.toLowerCase().replace(/\s+/g, '-'); // Handle spaces in room names
      router.push(`/chat/${formattedRoom}`); // Redirect to the new room
    } else {
      alert('Please enter a valid room name.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <Navbar /> {/* Add the Navbar here */}

      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-blue-400">Welcome to the Tech Dashboard</h1>
        <p className="text-gray-400">
          Dive into the latest tech conversations. Manage your coding rooms, collaborate on projects, and stay up-to-date with the developer community.
        </p>
      </header>

      {/* Room List Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Available Coding Rooms</h2>
        <ul className="space-y-4">
          {rooms.map((room, index) => (
            <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
              {/* Fix: Remove <a> and apply class directly to Link */}
              <Link href={`/chat/${room.toLowerCase()}`} className="text-blue-400 underline hover:text-blue-500 transition duration-200">
                {room} Room
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* New Features: Create Room and Profile Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Create Room Feature */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Create a New Coding Room</h3>
          <p className="text-gray-400 mb-4">
            Spin up a new space for real-time code collaboration. Invite others to discuss algorithms, frameworks, and more.
          </p>
          <input
            type="text"
            value={newRoom}
            onChange={(e) => setNewRoom(e.target.value)}
            placeholder="Enter new room name"
            className="w-full mb-4 p-2 bg-gray-700 text-gray-200 rounded-lg"
          />
          <button
            onClick={handleCreateRoom}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300">
            Create Room
          </button>
        </div>

        {/* User Profile Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Developer Profile</h3>
          <p className="text-gray-400 mb-4">
            Customize your developer profile, update your programming languages, or tweak your avatar to showcase your skills.
          </p>
          <Link href="/profile" className="text-blue-400 underline hover:text-blue-500 transition duration-200">
            Go to Profile Settings
          </Link>
        </div>
      </div>
    </div>
  );
}
