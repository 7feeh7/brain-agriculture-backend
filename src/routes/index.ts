import { Router } from "express";
import { producersRouter } from "./producers";
import { farmsRouter } from "./farms";

const router = Router();

router.use("/producers", producersRouter);
router.use("/farms", farmsRouter);

export { router };