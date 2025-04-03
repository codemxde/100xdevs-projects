import { Request, Response, NextFunction } from "express";

import errors from "../../errors/throw.js";
import handleError from "../../errors/handle.js";
import Users from "../../models/Users.js";
import logger from "../../log/logger.js";

export const checkifUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username } = req.body;

    const user = await Users.findOne({
      username: username,
    });

    if (user) {
      throw new errors.UserAlreadyExists();
    }

    console.log(
      logger.middleware(
        "Verified that user does not exist in the database... calling next midleware"
      )
    );

    next();
  } catch (error: any) {
    handleError(error, res, "unable to check user in the database");
  }
};

export const findUserInDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username } = req.body;

    const user = await Users.findOne({ username });

    if (!user) {
      throw new errors.UserNotFound();
    }

    // modify req.body to store encrypted password and the object id
    const hashedPassword = user.password;
    const userId = user.id;

    req.body.hashedPassword = hashedPassword;
    req.body.userId = userId;

    console.log(logger.middleware("User found in database... calling next middleware"));
    next();
  } catch (error: any) {
    handleError(error, res, "user does not exist");
  }
};
