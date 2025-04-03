import { Router } from "express";

import { validateUserInput } from "../middleware/input-validation/user.validate.js";
import { checkifUserExists, findUserInDb } from "../middleware/database/user.database.js";
import { encryptPassword } from "../middleware/hashing/user.encrypt.js";
import { signup } from "../controllers/user.controller.signup.js";
import { verifyPassword } from "../middleware/hashing/user.decrypt.js";
import { signin } from "../controllers/user.controller.signin.js";
import { authenticate } from "../middleware/authenticate/user.authenticate.js";

const router = Router();

router.post("/signup", validateUserInput, checkifUserExists, encryptPassword, signup);

router.post("/signin", validateUserInput, findUserInDb, verifyPassword, signin);

router.post("/content", authenticate);

export default router;
