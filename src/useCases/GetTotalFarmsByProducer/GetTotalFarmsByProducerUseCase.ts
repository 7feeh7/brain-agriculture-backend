import { PostgresFarmsRepository } from "../../repositories/implementations/PostgresFarmsRepository";

export class GetTotalFarmsByProducerUseCase {
    constructor(private farmsRepository: PostgresFarmsRepository) { }

    async execute(producerId: string): Promise<number> {
        return await this.farmsRepository.getTotalFarmsByProducerId(producerId);
    }
}
