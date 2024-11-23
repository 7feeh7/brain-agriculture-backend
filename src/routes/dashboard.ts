import { Router, Request, Response } from "express";
import { getTotalFarmsByProducerController } from "../useCases/GetTotalFarmsByProducer";

const dashboardRouter = Router();

dashboardRouter.get("/:producerId/total-farms", (request: Request, response: Response) => {
    return getTotalFarmsByProducerController.handle(request, response);
});

export { dashboardRouter };