
import { PostgresFarmsRepository } from "../../repositories/implementations/PostgresFarmsRepository";
import { GetLandUsageByProducerUseCase } from "./GetLandUsageByProducerUseCase";
import { GetLandUsageByProducerController } from "./GetLandUsageByProducerController";

const postgresFarmsRepository = new PostgresFarmsRepository();
const getLandUsageByProducerUseCase = new GetLandUsageByProducerUseCase(postgresFarmsRepository);
const getLandUsageByProducerController = new GetLandUsageByProducerController(getLandUsageByProducerUseCase);

export { getLandUsageByProducerController };
