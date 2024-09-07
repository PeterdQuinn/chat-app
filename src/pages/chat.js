// pages/chat/[roomId].js
import { useRouter } from 'next/router';
import ChatRoom from '../../components/ChatRoom';

export default function ChatRoomPage() {
  const router = useRouter();
  const { roomId } = router.query; // Dynamic room ID from the URL

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Chat Room: {roomId}</h1>
      </header>
      
      <main className="p-6">
        {/* ChatRoom component renders chat messages and input */}
        <ChatRoom roomId={roomId} />
      </main>
    </div>
  );
}
