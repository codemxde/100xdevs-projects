import { Router } from 'express';
import express from 'express';

import { validateRequest } from '../middlewares/input-validation/input.validate';
import { createUser, findUser } from '../middlewares/user-validation/user.validate';

import { signin, signup } from '../controllers/user.signup';

const router: Router = Router();

router.use(express.json());

router.use(validateRequest);

router.post('/signup', createUser, signup);

router.post('/signin', findUser, signin);

export default router;
