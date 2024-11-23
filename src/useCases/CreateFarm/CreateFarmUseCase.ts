import { Farm } from "../../entities/Farm";
import { IFarmsRepository } from "../../repositories/IFarmsRepository";
import { ICreateFarmDTO } from "./CreateFarmDTO";

export class CreateFarmUseCase {
    constructor(private farmsRepository: IFarmsRepository) { }

    async execute(data: ICreateFarmDTO): Promise<void> {
        const { totalArea, agriculturalArea, vegetationArea } = data;

        if (agriculturalArea + vegetationArea > totalArea) {
            throw new Error("A soma das áreas agrícolas e de vegetação não pode ultrapassar a área total.");
        }

        const farm = new Farm(
            data.name,
            data.city,
            data.state,
            totalArea,
            agriculturalArea,
            vegetationArea,
            data.crops,
            data.producerId
        );

        await this.farmsRepository.save(farm);
    }
}