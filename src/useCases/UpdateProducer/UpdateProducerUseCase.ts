import { IProducersRepository } from "../../repositories/IProducersRepository";
import { IUpdateProducerDTO } from "./UpdateProducerDTO";

export class UpdateProducerUseCase {
    constructor(private producersRepository: IProducersRepository) { }

    async execute(data: IUpdateProducerDTO) {
        const { id, name } = data;

        const existingProducer = await this.producersRepository.findById(id);
        if (!existingProducer) {
            throw new Error("Produtor não encontrado.");
        }

        const updatedProducer = {
            ...existingProducer,
            name: name ?? existingProducer.name,
        };

        await this.producersRepository.update(updatedProducer);
    }
}