import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      throw new Error('user is already signed up');
    }

    console.log('user does not exist... calling next middleware');
    next();
  } catch (error: any) {
    res.status(409).json({ fail: 'user signup failed' });
    console.error(error.message + '\n');
  }
};

export const findUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const userMatch = await prisma.user.findUnique({
      where: {
        email: email,
        password: password,
      },
    });

    if (!userMatch) {
      throw new Error('user does not exist');
    }

    // @ts-ignore
    req.user = userMatch;

    console.log('user found in records... calling next middleware');
    next();
  } catch (error: any) {
    res.status(403).json({ fail: 'user signin failed' });
    console.error(error + '\n');
  }
};
