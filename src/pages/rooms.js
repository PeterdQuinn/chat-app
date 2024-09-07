import Link from 'next/link';

export default function Rooms() {
  const rooms = ['General', 'Tech Talk', 'Gaming'];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Available Rooms</h1>
      <ul>
        {rooms.map((room, index) => (
          <li key={index}>
            <Link href={`/chat/${room.toLowerCase()}`} className="text-blue-500 underline">
              {room}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
