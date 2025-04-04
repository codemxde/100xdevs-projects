import { Request, Response } from "express";
import Links from "../models/Links.js";
import generateHash from "../utils/user.hash.js";
import handleError from "../errors/handle.js";
import logger from "../log/logger.js";

type ResponseObject = {
  hash?: string;
  success?: string;
};

export const shareBrain = async (req: Request, res: Response) => {
  try {
    const { share, userId } = req.body;
    let responseObject: ResponseObject = {};

    if (share) {
      const shareLink = await Links.findOne({ userId });

      let hash = "";

      if (shareLink?.hash) {
        hash = shareLink.hash;
      } else {
        hash = generateHash();

        await Links.create({
          hash,
          userId: userId,
        });
      }

      responseObject.hash = hash;
      console.log(logger.success("Created/Shared brain link\n"));
    } else {
      await Links.deleteOne({ userId });

      responseObject.success = "share link has been deleted";
      console.log(logger.success("Successfully disabled brain share link\n"));
    }

    res.status(200).json(responseObject);
  } catch (error: any) {
    handleError(error, res, "failed to create/delete shareable link");
  }
};
