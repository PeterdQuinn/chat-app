// pages/index.js
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    // Simulate login, later replace with actual login logic
    router.push('/dashboard');
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg">
        Click to Login
      </button>
    </div>
  );
}
