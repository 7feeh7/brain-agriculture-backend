import { IFarmsRepository } from "../../repositories/IFarmsRepository";
import { IUpdateFarmDTO } from "./UpdateFarmDTO";

export class UpdateFarmUseCase {
    constructor(private farmsRepository: IFarmsRepository) { }

    async execute(data: IUpdateFarmDTO): Promise<void> {
        const { id, totalArea, agriculturalArea, vegetationArea } = data;

        const existingFarm = await this.farmsRepository.findById(id);
        if (!existingFarm) {
            throw new Error("Fazenda não encontrada.");
        }

        if (
            agriculturalArea !== undefined &&
            vegetationArea !== undefined &&
            totalArea !== undefined &&
            agriculturalArea + vegetationArea > totalArea
        ) {
            throw new Error("A soma das áreas agrícolas e de vegetação não pode ultrapassar a área total.");
        }

        await this.farmsRepository.update(id, data);
    }
}