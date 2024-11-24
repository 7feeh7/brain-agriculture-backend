import { IFarmsRepository } from "../../repositories/IFarmsRepository";

export class GetTotalAreaByProducerUseCase {
    constructor(private farmsRepository: IFarmsRepository) { }

    async execute(producerId: string): Promise<number> {
        return await this.farmsRepository.getTotalAreaByProducerId(producerId);
    }
}
