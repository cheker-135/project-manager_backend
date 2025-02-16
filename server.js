import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import connectDb from './config/db.js';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import images from './images.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { socket } from './socket.js';

dotenv.config();

connectDb();

const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server);
socket(io);
// Add a connection event listener to check if the socket is running correctly
io.on('connection', (socket) => {
  try {
    console.log(`Socket ${socket.id} connected.`);
    // Check if the socket is connected
    if (socket.connected) {
      console.log('Socket is connected.');
    } else {
      console.log('Socket is not connected.');
    }
  } catch (error) {
    console.error('Error checking socket connection:', error);
  }
});


app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/images', images);

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend/build/index.html'))
  );
}
const PORT = process.env.PORT || 5000;
server.listen(
  PORT,
  console.log(`Server running on port ${PORT}`)
);

app.use(notFound);

app.use(errorHandler);
