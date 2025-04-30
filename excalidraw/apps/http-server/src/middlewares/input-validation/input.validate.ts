import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  try {
    const requestSchema = z.object({
      email: z.string().email().max(50),
      password: z.string().min(8).max(32),
    });

    const parseResult = requestSchema.safeParse(req.body);

    if (!parseResult.success) {
      throw new Error('request body validation failed');
    }

    console.log('signup request body validation successful... calling next middleware');

    next();
  } catch (error) {
    res.status(500).json({ fail: 'request body validation failed' });
  }
};
