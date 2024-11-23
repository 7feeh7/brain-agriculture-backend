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

    async save(farm: Farm): Promise<void> {
        await this.db("farms").insert({
            id: farm.id,
            name: farm.name,
            city: farm.city,
            state: farm.state,
            total_area: farm.totalArea,
            agricultural_area: farm.agriculturalArea,
            vegetation_area: farm.vegetationArea,
            crops: farm.crops,
            producer_id: farm.producerId,
        });
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
}
