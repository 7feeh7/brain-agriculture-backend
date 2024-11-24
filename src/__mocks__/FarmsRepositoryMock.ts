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
        const mockData: { [key: string]: number } = {
            "2fcdca95-3751-5410-96de-464a4e1f2b2a": 3,
            "d7b08b79-da95-590f-ac79-dbec51057562": 5,
        };
        return mockData[producerId] || 0;
    }

    async getTotalAreaByProducerId(producerId: string): Promise<number> {
        const mockData: { [key: string]: number } = {
            "2fcdca95-3751-5410-96de-464a4e1f2b2a": 150,
            "d7b08b79-da95-590f-ac79-dbec51057562": 200,
        };
        return mockData[producerId] || 0;
    }

    async getFarmsByStateByProducerId(producerId: string): Promise<{
        state: string;
        total: number
    }[]> {
        if (producerId === "2fcdca95-3751-5410-96de-464a4e1f2b2a") {
            return [
                { state: "SP", total: 3 },
                { state: "MG", total: 2 },
                { state: "PR", total: 1 },
            ];
        }
        return [];
    }

    async getCropsDistributionByProducerId(producerId: string): Promise<{
        crop: string;
        total: number
    }[]> {
        if (producerId === "2fcdca95-3751-5410-96de-464a4e1f2b2a") {
            return [
                { crop: "Soja", total: 3 },
                { crop: "Milho", total: 2 },
                { crop: "Cana-de-açúcar", total: 1 },
            ];
        }
        return [];
    }

    async getLandUsageByProducer(producerId: string): Promise<{ agricultural: number; vegetation: number }> {
        if (producerId === "2fcdca95-3751-5410-96de-464a4e1f2b2a") {
            return {
                agricultural: 150,
                vegetation: 50,
            };
        }
        return { agricultural: 0, vegetation: 0 };
    }
}
