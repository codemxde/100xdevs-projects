import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import handleError from "../errors/handle.js";
import logger from "../log/logger.js";

export const signin = (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const token = jwt.sign({ userId }, process.env.JWT_SECRET as string);

    console.log(logger.middleware("Token generation successful"));
    res.status(200).json({ token });
    console.log(logger.success("User is now signed in!"));
  } catch (error: any) {
    handleError(error, res, "failed to generate token");
  }
};
