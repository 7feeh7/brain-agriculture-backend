import { PostgresFarmsRepository } from "../../repositories/implementations/PostgresFarmsRepository";

export class GetTotalAreaByProducerUseCase {
    constructor(private farmsRepository: PostgresFarmsRepository) { }

    async execute(producerId: string): Promise<number> {
        return await this.farmsRepository.getTotalAreaByProducerId(producerId);
    }
}
