import { Router, Request, Response } from "express";
import { createFarmController } from "../useCases/CreateFarm";
import { updateFarmController } from "../useCases/UpdateFarm";
import { validateCreateFarm } from "../middlewares/validation/validateCreateFarm";

const farmsRouter = Router();

farmsRouter.post("/", validateCreateFarm, (request: Request, response: Response) => {
    createFarmController.handle(request, response);
});

farmsRouter.patch("/:id", (request: Request, response: Response) => {
    updateFarmController.handle(request, response);
});

export { farmsRouter };