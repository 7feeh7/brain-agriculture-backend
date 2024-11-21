import { IProducersRepository } from "../../repositories/IProducersRepository";

export class DeleteProducerUseCase {
    constructor(private producersRepository: IProducersRepository) { }

    async execute(id: string) {
        return await this.producersRepository.delete(id);
    }
}