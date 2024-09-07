import Link from 'next/link';

export default function Rooms() {
  const rooms = ['General', 'Tech Talk', 'Gaming']; // The rooms remain as you had them

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Available Rooms</h1>
      <ul className="space-y-4">
        {rooms.map((room, index) => (
          <li key={index}>
            <Link href={`/chat/${room.toLowerCase()}`}>
              <a className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300">
                {room} Room
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
