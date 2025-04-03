import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";

import errors from "../../errors/throw.js";
import logger from "../../log/logger.js";

export const verifyPassword = async (req: Request, res: Response, next: NextFunction) => {
  // extract hashed password from request body
  const { hashedPassword, password } = req.body;

  const match = await bcrypt.compare(password, hashedPassword);

  if (!match) {
    throw new errors.AuthenticationError("either username or password is incorrect");
  }

  console.log(
    logger.middleware("user verification successful... calling next middleware")
  );

  next();
};
