import { Request, Response, NextFunction } from "express";

import Content from "../models/Content.js";
import errors from "../errors/throw.js";
import handleError from "../errors/handle.js";
import logger from "../log/logger.js";

export const insertContent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { url, title, tags, userId } = req.body;

    await Content.create({
      url,
      title,
      tags,
      userId,
    });

    console.log(logger.success("Successfully inserted user content\n"));

    res.status(200).json({ success: "user content added" });
  } catch (error: any) {
    handleError(error, res, "failed to add content");
  }
};

export const fetchContent = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;

    const content = await Content.find({ userId }).populate("userId", "username");

    console.log(logger.success("Fetched all content by user\n"));

    res.status(200).json({ content });
  } catch (error: any) {
    handleError(error, res, "failed to fetch records for user");
  }
};

export const deleteContent = async (req: Request, res: Response) => {
  try {
    const { userId, url } = req.body;

    const content = await Content.find({ userId, url });

    if (content.length === 0) {
      throw new errors.UserNotFound("content not found for user");
    }

    await Content.deleteOne({ userId, url });

    res.status(200).json({ success: "content deleted" });

    console.log(logger.success("Content deleted for user\n"));
  } catch (error: any) {
    handleError(error, res, "failed to delete content");
  }
};

export const eraseBrain = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;

    await Content.deleteMany({ userId });

    console.log(logger.success("Deleted user's brain 🧠\n"));

    res.status(200).json({ success: "user brain erased" });
  } catch (error: any) {
    handleError(error, res, "failed to delete brain");
  }
};

export const getBrain = async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const { brain } = req;

    const { userId } = brain;

    const userObjectId = userId._id.toString();

    const content = await Content.find({ userId: userObjectId }).select({
      url: 1,
      title: 1,
      tags: 1,
      _id: 0,
    });

    console.log(logger.success("Successfully fetched brain from link"));

    res.status(200).json(content);
  } catch (error: any) {
    handleError(error, res, "unable to fetch brain");
  }
};
