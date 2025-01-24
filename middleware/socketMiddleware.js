import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import asyncHandler from 'express-async-handler';
import User from '../models/user.js';
import Project from '../models/project.js';
dotenv.config();

const authorizeSocketConnection = asyncHandler(async (data, socket) => {
  try {
    const token = data.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      throw new Error('User not found');
    }
    socket.user = user;
  } catch (error) {
    console.error('Socket authorization error:', error.message);
    socket.emit('auth-error');
  }
});

const levelOneAuth = asyncHandler(async (data, socket) => {
  try {
    const isAuthorized = await Project.findOne(
      {
        _id: data.projectId,
      },
      {
        users: {
          $elemMatch: {
            user: socket.user._id,
            permissions: { $in: [1, 2] },
          },
        },
      }
    );
    if (isAuthorized.users.length === 0) {
      throw new Error('User not authorized');
    }
    socket.user.permissions = isAuthorized.users[0].permissions;
  } catch (error) {
    console.error('Level One authorization error:', error.message);
    socket.emit('auth-error');
  }
});

const levelTwoAuth = asyncHandler(async (data, socket) => {
  try {
    const isAuthorized = await Project.findOne(
      {
        _id: data.projectId,
      },
      {
        users: {
          $elemMatch: {
            user: socket.user._id,
            permissions: 2,
          },
        },
      }
    );
    if (isAuthorized.users.length === 0) {
      throw new Error('User not authorized');
    }
    socket.user.permissions = 2;
  } catch (error) {
    console.error('Level Two authorization error:', error.message);
    socket.emit('auth-error');
  }
});

export { authorizeSocketConnection, levelOneAuth, levelTwoAuth };
