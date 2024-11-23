import { GetTotalAreaByProducerUseCase } from "./GetTotalAreaByProducerUseCase";
import { GetTotalAreaByProducerController } from "./GetTotalAreaByProducerController";
import { PostgresFarmsRepository } from "../../repositories/implementations/PostgresFarmsRepository";

const postgresFarmsRepository = new PostgresFarmsRepository();

const getTotalAreaByProducerUseCase = new GetTotalAreaByProducerUseCase(
    postgresFarmsRepository
);

const getTotalAreaByProducerController = new GetTotalAreaByProducerController(
    getTotalAreaByProducerUseCase
);

export { getTotalAreaByProducerController };
