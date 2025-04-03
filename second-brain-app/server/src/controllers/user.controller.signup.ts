import { Request, Response } from "express";

import Users from "../models/Users.js";
import handleError from "../errors/handle.js";

export const signup = (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    Users.create({
      username: username,
      password: password,
    });

    res.status(200).json({ success: "user is now signed up" });
  } catch (error: any) {
    handleError(error, res, "unable to add user to the database");
  }
};
