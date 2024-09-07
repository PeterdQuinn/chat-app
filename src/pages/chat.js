// pages/chat/[room].js
import { useRouter } from 'next/router';

export default function ChatRoom() {
  const router = useRouter();
  const { room } = router.query; // Get the dynamic room name from the URL

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-blue-400">Welcome to the {room} Room</h1>
        <p className="text-gray-400">
          You are now chatting about {room}. Share your thoughts, ask questions, and collaborate with others in real-time.
        </p>
      </header>

      {/* Chat box placeholder */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg min-h-[400px]">
        <p className="text-gray-400 mb-4">Chat messages will go here.</p>
        <input
          type="text"
          className="w-full bg-gray-700 text-gray-200 p-4 rounded-lg"
          placeholder="Type your message here..."
        />
      </div>
    </div>
  );
}
