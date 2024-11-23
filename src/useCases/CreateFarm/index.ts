import {
    PostgresFarmsRepository
} from "../../repositories/implementations/PostgresFarmsRepository";
import { CreateFarmUseCase } from "./CreateFarmUseCase";
import { CreateFarmController } from "./CreateFarmController";

const postgresFarmsRepository = new PostgresFarmsRepository();

const createFarmUseCase = new CreateFarmUseCase(postgresFarmsRepository);

const createFarmController = new CreateFarmController(createFarmUseCase);

export { createFarmController };
