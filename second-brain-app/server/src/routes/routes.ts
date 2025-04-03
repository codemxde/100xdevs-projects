import { Router } from "express";

import { validateUserInput } from "../middleware/input-validation/user.validate.js";
import { checkifUserExists } from "../middleware/database/user.database.js";
import { encryptPassword } from "../middleware/hashing/user.encrypt.js";
import { signup } from "../controllers/user.controller.signup.js";

const router = Router();

router.post(
  "/api/v1/signup",
  validateUserInput,
  checkifUserExists,
  encryptPassword,
  signup
);

export default router;
