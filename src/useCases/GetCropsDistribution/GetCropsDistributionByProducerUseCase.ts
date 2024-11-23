import { PostgresFarmsRepository } from "../../repositories/implementations/PostgresFarmsRepository";

export class GetCropsDistributionByProducerUseCase {
    constructor(private farmsRepository: PostgresFarmsRepository) { }

    async execute(producerId: string): Promise<{ crop: string; total: number }[]> {
        return await this.farmsRepository.getCropsDistributionByProducerId(producerId);
    }
}
