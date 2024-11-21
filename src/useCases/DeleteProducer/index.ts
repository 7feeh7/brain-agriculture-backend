import {
    PostgresProducersRepository
} from "../../repositories/implementations/PostgresProducersRepository";
import { DeleteProducerController } from "./DeleteProducerController";
import { DeleteProducerUseCase } from "./DeleteProducerUseCase";

const postgresProducersRepository = new PostgresProducersRepository();

const deleteProducerUseCase = new DeleteProducerUseCase(
    postgresProducersRepository
);

const deleteProducerController = new DeleteProducerController(
    deleteProducerUseCase
);

export { deleteProducerUseCase, deleteProducerController };