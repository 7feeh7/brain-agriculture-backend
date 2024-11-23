import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("farms", (table) => {
        table.uuid("id").primary();
        table.string("name").notNullable();
        table.string("city").notNullable();
        table.string("state").notNullable();
        table.decimal("total_area", 10, 2).notNullable();
        table.decimal("agricultural_area", 10, 2).notNullable();
        table.decimal("vegetation_area", 10, 2).notNullable();
        table.specificType("crops", "text[]").notNullable();
        table.uuid("producer_id").notNullable();
        table.foreign("producer_id").references("id").inTable("producers").onDelete("CASCADE");
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("farms");
}
