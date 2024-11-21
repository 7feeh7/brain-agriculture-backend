import { knex, Knex } from "knex";
import * as dotenv from "dotenv";

dotenv.config();

export class PostgresDatabase {
    private static instance: PostgresDatabase;
    private knexInstance: Knex;

    private constructor() {
        this.knexInstance = knex({
            client: process.env.DB_CLIENT,
            connection: {
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
            },
            pool: {
                min: 2,
                max: 10
            },
        });
    }

    public static getInstance(): PostgresDatabase {
        if (!PostgresDatabase.instance) {
            PostgresDatabase.instance = new PostgresDatabase();
        }
        return PostgresDatabase.instance;
    }

    public getKnex(): Knex {
        return this.knexInstance;
    }

    public async close(): Promise<void> {
        await this.knexInstance.destroy();
    }
}
