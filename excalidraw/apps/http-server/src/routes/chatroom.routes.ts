import express, { NextFunction, Request, Response } from 'express';
import { Router } from 'express';

import jwt from 'jsonwebtoken';

import { generateRoomId } from '../utils/chatroom';
import { WebSocketServer } from 'ws';

import { JWT_SECRET } from '@repo/server-common/config';

const router: Router = Router();

router.use(express.json());

router.post('/create-room', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.body;

    if (!token) {
      throw new Error('token not sent');
    }

    // @ts-ignore
    const { email } = jwt.verify(token, JWT_SECRET);

    const roomId = generateRoomId();

    const wss = new WebSocketServer({ port: 8080 });

    wss.on('connection', (socket) => {
      socket.on('message', (event) => {
        const data = JSON.parse(event.toString());

        // if (data.type === '')
      });
    });

    res.status(200).json({ roomId });
    console.log('chatroom created successfully\n');
  } catch (error: any) {
    res.status(500).json({ fail: 'failed to create chatroom' });
    console.error(error.message + '\n');
  }
});

export default router;
