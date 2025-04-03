import { Request, Response, NextFunction } from "express";
import { z } from "zod";

import errors from "../../errors/throw.js";
import handleError from "../../errors/handle.js";
import logger from "../../log/logger.js";

export const validateUserInput = (req: Request, res: Response, next: NextFunction) => {
  try {
    const inputSchema = z.object({
      username: z.string().min(3).max(32).email(),
      password: z
        .string()
        .min(8)
        .max(20)
        .regex(/[A-Z]/, "one uppercase")
        .regex(/[a-z]/, "one lowercase")
        .regex(/[0-9]/, "one digit")
        .regex(/[^a-zA-Z0-9]/, "one special character"),
    });

    const parseresult = inputSchema.safeParse(req.body);

    if (!parseresult.success) {
      throw new errors.InvalidPayloadSchema("invalid fields sent");
    }

    console.log(
      logger.middleware("\nInput validation successful... calling next middleware")
    );

    next();
  } catch (error: any) {
    handleError(error, res, "failed to signup user");
  }
};
