import { PostgresFarmsRepository } from "../../repositories/implementations/PostgresFarmsRepository";

export class GetLandUsageByProducerUseCase {
    constructor(private farmsRepository: PostgresFarmsRepository) { }

    async execute(producerId: string): Promise<{ agricultural: number; vegetation: number }> {
        return await this.farmsRepository.getLandUsageByProducer(producerId);
    }
}
