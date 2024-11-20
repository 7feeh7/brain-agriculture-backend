import * as dotenv from "dotenv";

dotenv.config();

export default {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) || 5432
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/database/migrations'
  }
}