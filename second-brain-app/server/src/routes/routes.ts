import { Router } from "express";

import {
  validateContent,
  validateShare,
  validateUserInput,
} from "../middleware/input-validation/user.validate.js";
import {
  checkifUserExists,
  findUserInDb,
  validateBrain,
} from "../middleware/database/user.database.js";
import { encryptPassword } from "../middleware/hashing/user.encrypt.js";
import { signup } from "../controllers/user.controller.signup.js";
import { verifyPassword } from "../middleware/hashing/user.decrypt.js";
import { signin } from "../controllers/user.controller.signin.js";
import { authenticate } from "../middleware/authenticate/user.authenticate.js";
import {
  deleteContent,
  eraseBrain,
  fetchContent,
  getBrain,
  insertContent,
} from "../controllers/user.controller.content.js";
import { shareBrain } from "../controllers/user.controller.share.js";

const router = Router();

router.post("/signup", validateUserInput, checkifUserExists, encryptPassword, signup);

router.post("/signin", validateUserInput, findUserInDb, verifyPassword, signin);

router.get("/brain/:shareLink", validateBrain, getBrain);

router.use(authenticate);

router.post("/content", validateContent, insertContent);

router.get("/content", fetchContent);

router.delete("/content", deleteContent);

router.delete("/brain/erase", eraseBrain);

router.post("/brain/share", validateShare, shareBrain);

export default router;
