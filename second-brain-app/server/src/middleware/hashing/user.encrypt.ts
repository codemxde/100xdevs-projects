import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";

import handleError from "../../errors/handle.js";
import logger from "../../log/logger.js";

export const encryptPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 5);

    req.body.password = hashedPassword;
    console.log(logger.middleware("Hashed user password... calling next middleware"));
    next();
  } catch (error: any) {
    handleError(error, res, "unable to hash password");
  }
};
