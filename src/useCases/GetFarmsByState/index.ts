import { PostgresFarmsRepository } from "../../repositories/implementations/PostgresFarmsRepository";
import { GetFarmsByStateByProducerController } from "./GetFarmsByStateController";
import { GetFarmsByStateByProducerUseCase } from "./GetFarmsByStateUseCase";

const postgresFarmsRepository = new PostgresFarmsRepository();
const getFarmsByStateByProducerUseCase = new GetFarmsByStateByProducerUseCase(
    postgresFarmsRepository
);
const getFarmsByStateByProducerController = new GetFarmsByStateByProducerController(
    getFarmsByStateByProducerUseCase
);

export { getFarmsByStateByProducerController };
