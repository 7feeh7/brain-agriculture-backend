import { Farm } from "../entities/Farm";
export interface IFarmsRepository {
    save(farm: Farm): Promise<Farm>;
    findByProducerId(producerId: string): Promise<Farm[]>;
    findById(id: string): Promise<Farm | null>;
    update(id: string, farm: Partial<Farm>): Promise<void>;
    getTotalFarmsByProducerId(producerId: string): Promise<number>;
    getTotalAreaByProducerId(producerId: string): Promise<number>;
    getFarmsByStateByProducerId(producerId: string): Promise<any[]>;
    getCropsDistributionByProducerId(producerId: string): Promise<any[]>;
    getLandUsageByProducer(producerId: string): Promise<any>;
}
