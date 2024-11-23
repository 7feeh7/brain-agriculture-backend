import { Router, Request, Response } from "express";
import { getTotalFarmsByProducerController } from "../useCases/GetTotalFarmsByProducer";
import { getTotalAreaByProducerController } from "../useCases/GetTotalAreaByProducer";
import { getFarmsByStateByProducerController } from "../useCases/GetFarmsByState";

const dashboardRouter = Router();

dashboardRouter.get("/:producerId/total-farms", (request: Request, response: Response) => {
    return getTotalFarmsByProducerController.handle(request, response);
});

dashboardRouter.get("/:producerId/total-area", (request: Request, response: Response) => {
    return getTotalAreaByProducerController.handle(request, response);
});

dashboardRouter.get("/:producerId/farms-by-state", (request: Request, response: Response) => {
    return getFarmsByStateByProducerController.handle(request, response);
});

export { dashboardRouter };