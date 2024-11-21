import { IProducersRepository } from "../../repositories/IProducersRepository";

export class GetProducersUseCase {
    constructor(private producersRepository: IProducersRepository) { }

    async execute() {
        return await this.producersRepository.findAll();
    }
}