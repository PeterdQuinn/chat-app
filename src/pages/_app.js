import Navbar from '../components/Navbar'; // Adjust the path to your Navbar component
import '@/styles/globals.css'; // Assuming you're using global styles

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar /> {/* This ensures Navbar is on every page */}
      <Component {...pageProps} />
    </div>
  );
}
