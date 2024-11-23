import { Router, Request, Response } from "express";
import { createFarmController } from "../useCases/CreateFarm";
import { updateFarmController } from "../useCases/UpdateFarm";

const farmsRouter = Router();

farmsRouter.post("/", (request: Request, response: Response) => {
    return createFarmController.handle(request, response);
});

farmsRouter.patch("/:id", (request: Request, response: Response) => {
    return updateFarmController.handle(request, response);
});

export { farmsRouter };