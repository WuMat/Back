import express from 'express';
import {send, login} from '../controllers/usersController';
import {catchAsync} from '../moddlewares/errors';


const router = express.Router();

router.post('/signup',catchAsync(send))
router.post('/login', catchAsync(login))

export default router