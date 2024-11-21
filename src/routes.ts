import { Router, Request, Response } from 'express';
import { createProducerController } from './useCases/CreateProducer';
import { getProducerByIdController } from './useCases/GetProducerById';
import { getProducersController } from './useCases/GetProducers';
import { updateProducerController } from './useCases/UpdateProducer';
import { deleteProducerController } from './useCases/DeleteProducer';

const router = Router();

router.post('/producers', (request: Request, response: Response) => {
    return createProducerController.handle(request, response);
});

router.get('/producers/:id', (request: Request, response: Response) => {
    return getProducerByIdController.handle(request, response);
});

router.get('/producers/', (request: Request, response: Response) => {
    return getProducersController.handle(request, response);
});

router.patch('/producers/:id', (request: Request, response: Response) => {
    return updateProducerController.handle(request, response);
});

router.delete('/producers/:id', (request: Request, response: Response) => {
    return deleteProducerController.handle(request, response);
});

export { router };

