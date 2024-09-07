import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <Link href="/dashboard">
        <a className="mr-4">Dashboard</a>
      </Link>
      <Link href="/rooms">
        <a className="mr-4">Rooms</a>
      </Link>
    </nav>
  );
}
