import { Router } from "express";
import { producersRouter } from "./producers";
import { farmsRouter } from "./farms";
import { dashboardRouter } from "./dashboard";

const router = Router();

router.use("/producers", producersRouter);
router.use("/farms", farmsRouter);
router.use("/dashboard", dashboardRouter);

export { router };