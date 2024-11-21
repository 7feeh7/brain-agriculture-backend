import { PostgresProducersRepository } from "../../repositories/implementations/PostgresProducersRepository";
import { GetProducersController } from "./GetProducersController";
import { GetProducersUseCase } from "./GetProducersUseCase";

const postgresProducersRepository = new PostgresProducersRepository();

const getProducersUseCase = new GetProducersUseCase(
    postgresProducersRepository
);

const getProducersController = new GetProducersController(
    getProducersUseCase
);

export { getProducersUseCase, getProducersController };