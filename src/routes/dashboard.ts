import { Router, Request, Response } from "express";
import { getTotalFarmsByProducerController } from "../useCases/GetTotalFarmsByProducer";
import { getTotalAreaByProducerController } from "../useCases/GetTotalAreaByProducer";
import { getFarmsByStateByProducerController } from "../useCases/GetFarmsByState";
import { getCropsDistributionByProducerController } from "../useCases/GetCropsDistribution";
import { getLandUsageByProducerController } from "../useCases/GetLandUsage";

const dashboardRouter = Router();

dashboardRouter.get("/:producerId/total-farms", (request: Request, response: Response) => {
    getTotalFarmsByProducerController.handle(request, response);
});

dashboardRouter.get("/:producerId/total-area", (request: Request, response: Response) => {
    getTotalAreaByProducerController.handle(request, response);
});

dashboardRouter.get("/:producerId/farms-by-state", (request: Request, response: Response) => {
    getFarmsByStateByProducerController.handle(request, response);
});

dashboardRouter.get("/:producerId/crops-distribution", (request: Request, response: Response) => {
    getCropsDistributionByProducerController.handle(request, response);
});

dashboardRouter.get("/:producerId/land-usage", (request: Request, response: Response) => {
    getLandUsageByProducerController.handle(request, response);
});

export { dashboardRouter };