import { PostgresFarmsRepository } from "../../repositories/implementations/PostgresFarmsRepository";


export class GetFarmsByStateByProducerUseCase {
    constructor(private farmsRepository: PostgresFarmsRepository) { }

    async execute(producerId: string): Promise<{ state: string; total: number }[]> {
        return await this.farmsRepository.getFarmsByStateByProducerId(producerId);
    }
}
