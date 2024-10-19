import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/users.db",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: ["./src/database/migrations/*.ts"],
})

AppDataSource.initialize()
