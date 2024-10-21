import { DataSource } from "typeorm";
import { User } from "./entities/users-entities";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/users.db",
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: ["./src/database/migrations/*.ts"],
})

// Como ficaria a configuração do Banco de Dados de forma manual.

/* import sqlite3 from 'sqlite3';

// Cria ou abre o banco de dados
export const db = new sqlite3.Database('./src/database/users.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
    throw new Error('Erro ao conectar ao banco de dados:' + err.message)
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

// Cria a tabela users se não existir
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  idade INTEGER NOT NULL
)`); */
