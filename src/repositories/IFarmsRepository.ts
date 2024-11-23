import { Farm } from "../entities/Farm";

export interface IFarmsRepository {
    save(farm: Farm): Promise<void>;
    findByProducerId(producerId: string): Promise<Farm[]>;
}
