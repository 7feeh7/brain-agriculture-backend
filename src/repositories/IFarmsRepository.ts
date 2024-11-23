import { Farm } from "../entities/Farm";
export interface IFarmsRepository {
    save(farm: Farm): Promise<void>;
    findByProducerId(producerId: string): Promise<Farm[]>;
    findById(id: string): Promise<Farm | null>;
    update(id: string, farm: Partial<Farm>): Promise<void>;
    getTotalFarmsByProducerId(producerId: string): Promise<number>;
}
