import express from "express";
const router = express.Router();

import { getAll, send, delet, searching } from "../controllers/filmsController";
import { catchAsync } from "../moddlewares/errors";
import { checkAuth } from "../moddlewares/check-auth";

router.get("/", catchAsync(getAll));
router.post("/", catchAsync(send));
router.post("/search", catchAsync(searching));
router.delete("/:filmId", checkAuth, catchAsync(delet));

export default router;
