import { Router, Request, Response } from "express";
import { createProducerController } from "../useCases/CreateProducer";
import { getProducerByIdController } from "../useCases/GetProducerById";
import { getProducersController } from "../useCases/GetProducers";
import { updateProducerController } from "../useCases/UpdateProducer";
import { deleteProducerController } from "../useCases/DeleteProducer";

const producersRouter = Router();

producersRouter.post("/", (request: Request, response: Response) => {
    return createProducerController.handle(request, response);
});

producersRouter.get("/:id", (request: Request, response: Response) => {
    return getProducerByIdController.handle(request, response);
});

producersRouter.get("/", (request: Request, response: Response) => {
    return getProducersController.handle(request, response);
});

producersRouter.patch("/:id", (request: Request, response: Response) => {
    return updateProducerController.handle(request, response);
});

producersRouter.delete("/:id", (request: Request, response: Response) => {
    return deleteProducerController.handle(request, response);
});

export { producersRouter };