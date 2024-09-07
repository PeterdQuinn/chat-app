import { useState } from 'react';
import Link from 'next/link';
import { FaCode } from 'react-icons/fa'; // Import a coding symbol icon

export default function Profile() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const initialLetter = name.charAt(0); // Get the first letter of the name

  const handleSave = () => {
    alert('Profile Updated!');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      {/* Profile Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-blue-400">Your Profile</h1>
        <p className="text-gray-400">Manage your account settings and personal information.</p>
      </header>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        {/* Profile Icon with Name Initial */}
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold mr-4">
            {initialLetter}
          </div>
          <FaCode className="text-blue-400 text-3xl" /> {/* Coding symbol */}
        </div>

        {/* Name Field */}
        <div className="mb-6">
          <label className="block text-gray-300 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-3 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-gray-300 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Save Changes Button */}
        <button
          onClick={handleSave}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300">
          Save Changes
        </button>
      </div>

      {/* Navigation Links */}
      <div className="mt-6 text-center">
        <Link href="/dashboard" className="text-blue-400 underline">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
