import {
    PostgresFarmsRepository
} from "../../repositories/implementations/PostgresFarmsRepository";
import { UpdateFarmUseCase } from "./UpdateFarmUseCase";
import { UpdateFarmController } from "./UpdateFarmController";

const postgresFarmsRepository = new PostgresFarmsRepository();

const updateFarmUseCase = new UpdateFarmUseCase(postgresFarmsRepository);

const updateFarmController = new UpdateFarmController(updateFarmUseCase);

export { updateFarmController };
