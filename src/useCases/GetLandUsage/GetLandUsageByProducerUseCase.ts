import { IFarmsRepository } from "../../repositories/IFarmsRepository";

export class GetLandUsageByProducerUseCase {
    constructor(private farmsRepository: IFarmsRepository) { }

    async execute(producerId: string): Promise<{ agricultural: number; vegetation: number }> {
        return await this.farmsRepository.getLandUsageByProducer(producerId);
    }
}
