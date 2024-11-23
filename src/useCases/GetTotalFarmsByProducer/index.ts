import { GetTotalFarmsByProducerUseCase } from "./GetTotalFarmsByProducerUseCase";
import { GetTotalFarmsByProducerController } from "./GetTotalFarmsByProducerController";
import { PostgresFarmsRepository } from "../../repositories/implementations/PostgresFarmsRepository";

const postgresFarmsRepository = new PostgresFarmsRepository();

const getTotalFarmsByProducerUseCase = new GetTotalFarmsByProducerUseCase(
    postgresFarmsRepository
);

const getTotalFarmsByProducerController = new GetTotalFarmsByProducerController(
    getTotalFarmsByProducerUseCase
);

export { getTotalFarmsByProducerController };
