import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <Link href="/dashboard" className="mr-4 hover:text-blue-400 transition-colors duration-300">
        Dashboard
      </Link>
      <Link href="/profile" className="mr-4 hover:text-blue-400 transition-colors duration-300">
        Profile
      </Link>
      <Link href="/create-room" className="hover:text-blue-400 transition-colors duration-300">
        Create Room
      </Link>
    </nav>
  );
}
