import { IFarmsRepository } from "../../repositories/IFarmsRepository";
export class GetTotalFarmsByProducerUseCase {
    constructor(private farmsRepository: IFarmsRepository) { }

    async execute(producerId: string): Promise<number> {
        return await this.farmsRepository.getTotalFarmsByProducerId(producerId);
    }
}
