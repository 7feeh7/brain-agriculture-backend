import { IFarmsRepository } from "../../repositories/IFarmsRepository";
export class GetCropsDistributionByProducerUseCase {
    constructor(private farmsRepository: IFarmsRepository) { }

    async execute(producerId: string): Promise<{ crop: string; total: number }[]> {
        return await this.farmsRepository.getCropsDistributionByProducerId(producerId);
    }
}
