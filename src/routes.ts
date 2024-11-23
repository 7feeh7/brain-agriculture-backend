import { Router, Request, Response } from 'express';
import { createProducerController } from './useCases/CreateProducer';
import { getProducerByIdController } from './useCases/GetProducerById';
import { getProducersController } from './useCases/GetProducers';
import { updateProducerController } from './useCases/UpdateProducer';
import { deleteProducerController } from './useCases/DeleteProducer';
import { createFarmController } from './useCases/CreateFarm';

const router = Router();

router.post('/producers', (request: Request, response: Response) => {
    return createProducerController.handle(request, response);
});

router.get('/producers/:id', (request, response) => {
    return getProducerByIdController.handle(request, response);
});

router.get('/producers/', (request, response) => {
    return getProducersController.handle(request, response);
});

router.patch('/producers/:id', (request, response) => {
    return updateProducerController.handle(request, response);
});

router.delete('/producers/:id', (request, response) => {
    return deleteProducerController.handle(request, response);
});

router.post("/farms", (request, response) => {
    return createFarmController.handle(request, response);
});

export { router };

