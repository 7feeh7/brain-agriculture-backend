import type { Knex } from "knex";

export const up = async(knex: Knex): Promise<void> => {
    return knex.schema.createTable("producers", (table) => {
        table.uuid("id").primary();
        table.string("name").notNullable();
        table.string("tax_identifier").notNullable(); 
        table.timestamps(true, true); 
    });
}


export const down = async(knex: Knex): Promise<void> => {
    return knex.schema.dropTable("producers");
}

