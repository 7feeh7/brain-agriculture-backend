import { Producer } from "../../entities/Producer ";
import { IProducersRepository } from "../../repositories/IProducersRepository";
import { ICreateProducerDTO } from "./CreateProducerDTO";

export class CreateProducerUseCase {
    constructor(private producersRepository: IProducersRepository) { }

    async execute(data: ICreateProducerDTO) {
        const producer = new Producer(data.name, data.taxIdentifier);
        await this.producersRepository.save(producer);
    }
}