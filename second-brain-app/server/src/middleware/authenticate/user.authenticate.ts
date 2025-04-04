import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import errors from "../../errors/throw.js";
import handleError from "../../errors/handle.js";
import logger from "../../log/logger.js";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers?.authorization;

    if (!token) {
      throw new errors.AuthenticationError("jwt token not sent", 403);
    }

    const decodedInfo = jwt.verify(token, process.env.JWT_SECRET as string);

    if (!req.body) {
      req.body = {};
    }

    // @ts-ignore
    req.body.userId = decodedInfo.userId;

    console.log(
      logger.middleware("User authentication sucessful... calling next middleware")
    );

    next();
  } catch (error: any) {
    handleError(error, res, "failed to authenticate user");
  }
};
