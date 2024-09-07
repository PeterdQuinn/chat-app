import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
      {/* Remove the <a> tag, and apply className directly to <Link> */}
      <Link href="/rooms" className="text-blue-500 underline">
        Go to Chat Rooms
      </Link>
    </div>
  );
}
