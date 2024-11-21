import {
    PostgresProducersRepository
} from "../../repositories/implementations/PostgresProducersRepository";
import { CreateProducerController } from "./CreateProducerController";
import { CreateProducerUseCase } from "./CreateProducerUseCase";

const postgresProducersRepository = new PostgresProducersRepository();

const createProducerUseCase = new CreateProducerUseCase(
    postgresProducersRepository
);

const createProducerController = new CreateProducerController(
    createProducerUseCase
);

export { createProducerUseCase, createProducerController };