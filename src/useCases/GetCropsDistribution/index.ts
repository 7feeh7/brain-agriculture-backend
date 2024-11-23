import { PostgresFarmsRepository } from "../../repositories/implementations/PostgresFarmsRepository";
import { GetCropsDistributionByProducerUseCase } from "./GetCropsDistributionByProducerUseCase";
import { GetCropsDistributionByProducerController } from "./GetCropsDistributionByProducerController";

const postgresFarmsRepository = new PostgresFarmsRepository();
const getCropsDistributionByProducerUseCase = new GetCropsDistributionByProducerUseCase(
    postgresFarmsRepository
);
const getCropsDistributionByProducerController = new GetCropsDistributionByProducerController(
    getCropsDistributionByProducerUseCase
);

export { getCropsDistributionByProducerController };
