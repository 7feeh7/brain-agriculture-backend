import { Producer } from "../../entities/Producer ";
import { IProducersRepository } from "../IProducersRepository";
import { PostgresDatabase } from "../../database/PostgresDatabase";

export class PostgresProducersRepository implements IProducersRepository {
    private db;

    constructor() {
        const database = PostgresDatabase.getInstance();
        this.db = database.getKnex();
    }

    async save(producer: Producer): Promise<void> {
        await this.db("producers").insert({
            name: producer.name,
            tax_identifier: producer.taxIdentifier,
            id: producer.id,
        });
    }

    async findById(id: string): Promise<Producer> {
        return await this.db("producers").where({ id }).first();
    }

    async findAll(): Promise<Producer[]> {
        return await this.db("producers").select("*");
    }

    async delete(id: string): Promise<void> {
        await this.db("producers").where({ id }).delete();
    }

    async update(producer: Producer): Promise<void> {
        await this.db("producers").where({ id: producer.id }).update({
            name: producer.name,
            tax_identifier: producer.taxIdentifier
        });
    }

    async findByTaxIdentifier(taxIdentifier: string): Promise<Producer | null> {
        return await this.db("producers").where({ tax_identifier: taxIdentifier }).first() || null;
    }
}
