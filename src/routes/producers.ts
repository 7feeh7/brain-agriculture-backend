import { Router, Request, Response } from "express";
import { createProducerController } from "../useCases/CreateProducer";
import { getProducerByIdController } from "../useCases/GetProducerById";
import { getProducersController } from "../useCases/GetProducers";
import { updateProducerController } from "../useCases/UpdateProducer";
import { deleteProducerController } from "../useCases/DeleteProducer";
import { validateCreateProducer } from "../middlewares/validation/validateCreateProducer";

const producersRouter = Router();

producersRouter.post("/", validateCreateProducer, (request: Request, response: Response) => {
    createProducerController.handle(request, response);
});

producersRouter.get("/:id", (request: Request, response: Response) => {
    getProducerByIdController.handle(request, response);
});

producersRouter.get("/", (request: Request, response: Response) => {
    getProducersController.handle(request, response);
});

producersRouter.patch("/:id", (request: Request, response: Response) => {
    updateProducerController.handle(request, response);
});

producersRouter.delete("/:id", (request: Request, response: Response) => {
    deleteProducerController.handle(request, response);
});

export { producersRouter };