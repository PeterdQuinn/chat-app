import { Server } from 'socket.io';
import Cors from 'cors';

// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'POST'],
  origin: '*', // Be careful with this in production
});

// Helper function to run CORS middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function SocketHandler(req, res) {
  // Run CORS
  await runMiddleware(req, res, cors);

  if (!res.socket.server.io) {
    console.log('Initializing Socket.io server...');
    const io = new Server(res.socket.server, {
      path: '/api/socket', // Add the correct path here
      cors: {
        origin: '*', // Be careful with this in production
        methods: ['GET', 'POST'],
      },
    });

    res.socket.server.io = io;

    io.on('connection', (socket) => {
      console.log('New user connected:', socket.id);

      // Broadcast messages to all users
      socket.on('message', (messageData) => {
        console.log('Received message:', messageData);
        io.emit('message', messageData); // Send the message to everyone
      });

      socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
      });
    });
  } else {
    console.log('Socket.io server already running');
  }
  res.end();
}
