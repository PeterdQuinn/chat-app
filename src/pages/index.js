// pages/index.js
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    // Simulate login, later replace with actual login logic
    router.push('/dashboard');
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* Left side - Dark Section */}
      <div className="lg:w-1/2 w-full bg-gradient-to-tr from-gray-900 to-black text-white flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center">Welcome to ChatApp</h1>
        <p className="text-lg lg:text-xl text-gray-300 mb-8 text-center">
          Join the conversation, connect with others, and experience real-time chat like never before!
        </p>
        <p className="text-gray-400 italic text-center">Communication brings people together.</p>
      </div>

      {/* Right side - Light Section */}
      <div className="lg:w-1/2 w-full bg-white flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-6">Sign Up</h1>
        <p className="text-gray-600 mb-6 text-center">
          Get started by signing up or logging into your account. It’s quick and easy.
        </p>

        <button
          onClick={handleLogin}
          className="bg-blue-500 w-full max-w-sm text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 mb-4">
          Click to Login
        </button>

        <p className="text-gray-500 mt-6">
          Already have an account? <span className="text-blue-500">Sign in here</span>
        </p>
      </div>
    </div>
  );
}
