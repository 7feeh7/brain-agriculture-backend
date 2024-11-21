import { PostgresProducersRepository } from "../../repositories/implementations/PostgresProducersRepository";
import { GetProducerByIdController } from "./GetProducerByIdController";
import { GetProducerByIdUseCase } from "./GetProducerByIdUseCase";

const postgresProducersRepository = new PostgresProducersRepository();

const getProducerByIdUseCase = new GetProducerByIdUseCase(
    postgresProducersRepository
);

const getProducerByIdController = new GetProducerByIdController(
    getProducerByIdUseCase
);

export { getProducerByIdUseCase, getProducerByIdController };