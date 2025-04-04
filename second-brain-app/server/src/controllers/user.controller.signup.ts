import { Request, Response } from "express";

import Users from "../models/Users.js";
import handleError from "../errors/handle.js";
import logger from "../log/logger.js";

export const signup = (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    Users.create({
      username: username,
      password: password,
    });

    console.log(logger.success("User signup successful\n"));

    res.status(200).json({ success: "user is now signed up" });
  } catch (error: any) {
    handleError(error, res, "unable to add user to the database");
  }
};
