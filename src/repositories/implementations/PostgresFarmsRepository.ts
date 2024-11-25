import { Knex } from "knex";
import { Farm } from "../../entities/Farm";
import { IFarmsRepository } from "../IFarmsRepository";
import { PostgresDatabase } from "../../database/PostgresDatabase";

export class PostgresFarmsRepository implements IFarmsRepository {
    private db: Knex;

    constructor() {
        const database = PostgresDatabase.getInstance();
        this.db = database.getKnex();
    }

    async save(farm: Farm): Promise<Farm> {
        const [createdFarm] = await this.db("farms")
            .insert({
                id: farm.id,
                name: farm.name,
                city: farm.city,
                state: farm.state,
                total_area: farm.totalArea,
                agricultural_area: farm.agriculturalArea,
                vegetation_area: farm.vegetationArea,
                crops: farm.crops,
                producer_id: farm.producerId,
            })
            .returning([
                "id",
                "name",
                "city",
                "state",
                "total_area as totalArea",
                "agricultural_area as agriculturalArea",
                "vegetation_area as vegetationArea",
                "crops",
                "producer_id as producerId",
            ]);

        return createdFarm;
    }

    async findByProducerId(producerId: string): Promise<Farm[]> {
        const results = await this.db("farms")
            .where({ producer_id: producerId })
            .select("*");

        return results.map((row) => new Farm(
            row.name,
            row.city,
            row.state,
            row.total_area,
            row.agricultural_area,
            row.vegetation_area,
            row.crops,
            row.producer_id,
            row.id
        ));
    }

    async findById(id: string): Promise<Farm | null> {
        const result = await this.db("farms").where({ id }).first();
        if (!result) return null;

        return new Farm(
            result.name,
            result.city,
            result.state,
            result.total_area,
            result.agricultural_area,
            result.vegetation_area,
            result.crops,
            result.producer_id,
            result.id
        );
    }

    async update(id: string, farm: Partial<Farm>): Promise<void> {
        await this.db("farms").where({ id }).update({
            ...(farm.name && { name: farm.name }),
            ...(farm.city && { city: farm.city }),
            ...(farm.state && { state: farm.state }),
            ...(farm.totalArea && { total_area: farm.totalArea }),
            ...(farm.agriculturalArea && { agricultural_area: farm.agriculturalArea }),
            ...(farm.vegetationArea && { vegetation_area: farm.vegetationArea }),
            ...(farm.crops && { crops: farm.crops }),
        });
    }

    async getTotalFarmsByProducerId(producerId: string): Promise<number> {
        const result = await this.db("farms")
            .where({ producer_id: producerId })
            .count("id as total");
        return Number(result[0].total);
    }

    async getTotalAreaByProducerId(producerId: string): Promise<number> {
        const result = await this.db("farms")
            .where({ producer_id: producerId })
            .sum("total_area as total");
        return Number(result[0].total);
    }

    async getFarmsByStateByProducerId(producerId: string): Promise<{
        state: string;
        total: number
    }[]> {
        return await this.db("farms")
            .where({ producer_id: producerId })
            .select("state")
            .count("id as total")
            .groupBy("state");
    }

    async getCropsDistributionByProducerId(producerId: string): Promise<{
        crop: string;
        total: number
    }[]> {
        return await this.db("farms")
            .where({ producer_id: producerId })
            .select(this.db.raw("unnest(crops) as crop"))
            .count("id as total")
            .groupBy("crop");
    }

    async getLandUsageByProducer(producerId: string): Promise<{
        agricultural: number;
        vegetation: number
    }> {
        const agriculturalResult = await this.db("farms")
            .where({ producer_id: producerId })
            .sum("agricultural_area as total");
        const vegetationResult = await this.db("farms")
            .where({ producer_id: producerId })
            .sum("vegetation_area as total");

        return {
            agricultural: Number(agriculturalResult[0].total),
            vegetation: Number(vegetationResult[0].total),
        };
    }
}
