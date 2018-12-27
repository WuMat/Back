import express from 'express';
const router = express.Router();

import{getAll, send, delet}from '../controllers/filmsController';
import {catchAsync} from '../moddlewares/errors'
import {checkAuth} from '../moddlewares/check-auth'



router.get('/', checkAuth, catchAsync(getAll))
router.post('/', checkAuth, catchAsync(send))
router.delete('/:filmId', checkAuth, catchAsync(delet))

export default router