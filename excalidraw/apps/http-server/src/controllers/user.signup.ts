import jwt from 'jsonwebtoken';

import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { JWT_SECRET } from '@repo/server-common/config';

const prisma = new PrismaClient();

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });

    res.status(200).json({ success: 'you have signed up' });
    console.log('user signup sucessful\n');
  } catch (error: any) {
    res.status(500).json({ fail: 'error while signing up' });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const { user } = req;
    const { email } = user;

    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error('missing jwt secret');

    const token = jwt.sign({ email }, secret);
    res.status(200).json({ token });
    console.log('user signin successful\n');
  } catch (error) {
    res.status(500).json({ fail: 'unable to signin' });
    console.error('user signin failed\n');
  }
};
