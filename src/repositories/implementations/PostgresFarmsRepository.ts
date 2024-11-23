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
        const results = await this.db("farms").where({ producer_id: producerId }).select("*");
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
}
