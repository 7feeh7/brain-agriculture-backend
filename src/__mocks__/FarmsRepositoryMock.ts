import { Farm } from "../entities/Farm";
import { IFarmsRepository } from "../repositories/IFarmsRepository";


export class FarmsRepositoryMock implements IFarmsRepository {
    private farms: Farm[] = [];

    async save(farm: Farm): Promise<void> {
        this.farms.push(farm);
    }

    async findByProducerId(producerId: string): Promise<Farm[]> {
        return this.farms.filter((farm) => farm.producerId === producerId);
    }

    async findById(id: string): Promise<Farm | null> {
        return this.farms.find((farm) => farm.id === id) || null;
    }

    async update(id: string, farm: Partial<Farm>): Promise<void> {
        const index = this.farms.findIndex((f) => f.id === id);
        if (index !== -1) {
            this.farms[index] = { ...this.farms[index], ...farm };
        }
    }

    async getTotalFarmsByProducerId(producerId: string): Promise<number> {
        return this.farms.filter((farm) => farm.producerId === producerId).length;
    }

    async getTotalAreaByProducerId(producerId: string): Promise<number> {
        return this.farms
            .filter((farm) => farm.producerId === producerId)
            .reduce((total, farm) => total + farm.totalArea, 0);
    }

    async getFarmsByStateByProducerId(producerId: string): Promise<any[]> {
        const states = this.farms
            .filter((farm) => farm.producerId === producerId)
            .reduce((acc, farm) => {
                acc[farm.state] = (acc[farm.state] || 0) + 1;
                return acc;
            }, {} as Record<string, number>);

        return Object.entries(states).map(([state, total]) => ({ state, total }));
    }

    async getCropsDistributionByProducerId(producerId: string): Promise<any[]> {
        const cropsMap = this.farms
            .filter((farm) => farm.producerId === producerId)
            .reduce((acc, farm) => {
                farm.crops.forEach((crop) => {
                    acc[crop] = (acc[crop] || 0) + 1;
                });
                return acc;
            }, {} as Record<string, number>);

        return Object.entries(cropsMap).map(([crop, total]) => ({ crop, total }));
    }
}
