import { IProducersRepository } from "../../repositories/IProducersRepository";

export class GetProducerByIdUseCase {
    constructor(private producersRepository: IProducersRepository) { }

    async execute(id: string) {
        return await this.producersRepository.findById(id);
    }
}