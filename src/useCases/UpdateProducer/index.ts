import {
    PostgresProducersRepository
} from "../../repositories/implementations/PostgresProducersRepository";
import { UpdateProducerController } from "./UpdateProducerController";
import { UpdateProducerUseCase } from "./UpdateProducerUseCase";

const postgresProducersRepository = new PostgresProducersRepository();

const updateProducerUseCase = new UpdateProducerUseCase(
    postgresProducersRepository
);

const updateProducerController = new UpdateProducerController(
    updateProducerUseCase
);

export { updateProducerUseCase, updateProducerController };