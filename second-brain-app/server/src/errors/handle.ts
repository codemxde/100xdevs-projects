import { Response } from "express";

import errors from "../errors/throw.js";
import logger from "../log/logger.js";

const logAndSendResponse = (err: any, res: Response) => {
  console.log(logger.fail(err.message) + "\n");
  res.status(err.statusCode).json({ error: err.message });
};

const handleError = (err: Error, res: Response, custom?: String) => {
  if (err instanceof errors.InvalidPayloadSchema) {
    logAndSendResponse(err, res);
  } else if (err instanceof errors.UserAlreadyExists) {
    logAndSendResponse(err, res);
  } else if (err instanceof errors.UserNotFound) {
    logAndSendResponse(err, res);
  } else if (err instanceof errors.AuthenticationError) {
    logAndSendResponse(err, res);
  } else {
    console.log(logger.fail(err.message) + "\n");
    res.status(500).json({ error: custom });
  }
};

export default handleError;
