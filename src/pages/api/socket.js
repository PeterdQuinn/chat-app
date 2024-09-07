import { Server } from 'socket.io';

export default function SocketHandler(req, res) {
  if (res.socket.server.io) {
    console.log('Socket is already running');
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for typing event from a user
    socket.on('typing', (data) => {
      // Broadcast the typing status to other users
      socket.broadcast.emit('displayTyping', data.typing ? data : null);
    });

    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });

  res.end();
}
