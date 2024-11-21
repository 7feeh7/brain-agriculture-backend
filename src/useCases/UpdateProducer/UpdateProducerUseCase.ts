import { Producer } from "../../entities/Producer ";
import { IProducersRepository } from "../../repositories/IProducersRepository";
import { IUpdateProducerDTO } from "./UpdateProducerDTO";

export class UpdateProducerUseCase {
    constructor(private producersRepository: IProducersRepository) { }

    async execute(data: IUpdateProducerDTO) {
        const { id, name, taxIdentifier } = data;

        const existingProducer = await this.producersRepository.findById(id);
        if (!existingProducer) {
            throw new Error("Producer not found.");
        }

        const updatedProducer = {
            ...existingProducer,
            name: name ?? existingProducer.name,
            taxIdentifier: taxIdentifier ?? existingProducer.taxIdentifier,
        };

        await this.producersRepository.update(updatedProducer);
    }
}