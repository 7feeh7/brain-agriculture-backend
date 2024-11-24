import { Producer } from "../../entities/Producer ";
import { IProducersRepository } from "../../repositories/IProducersRepository";
import { validateTaxIdentifier } from "../../shared/utils";
import { ICreateProducerDTO } from "./CreateProducerDTO";

export class CreateProducerUseCase {
    constructor(private producersRepository: IProducersRepository) { }

    async execute(data: ICreateProducerDTO) {
        const { name, taxIdentifier } = data;

        if (!validateTaxIdentifier(taxIdentifier)) {
            throw new Error("CPF ou CNPJ inválido.");
        }

        const existingProducer = await this.producersRepository.findByTaxIdentifier(taxIdentifier);

        if (existingProducer) {
            throw new Error("Já existe um produtor cadastrado com este CPF/CNPJ.");
        }

        const producer = new Producer(name, taxIdentifier);
        await this.producersRepository.save(producer);
    }
}