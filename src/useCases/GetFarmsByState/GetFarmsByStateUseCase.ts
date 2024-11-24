import { IFarmsRepository } from "../../repositories/IFarmsRepository";
import { PostgresFarmsRepository } from "../../repositories/implementations/PostgresFarmsRepository";


export class GetFarmsByStateByProducerUseCase {
    constructor(private farmsRepository: IFarmsRepository) { }

    async execute(producerId: string): Promise<{ state: string; total: number }[]> {
        return await this.farmsRepository.getFarmsByStateByProducerId(producerId);
    }
}
