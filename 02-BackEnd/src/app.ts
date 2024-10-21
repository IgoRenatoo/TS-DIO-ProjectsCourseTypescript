import express from "express";
import 'dotenv/config'

import { AppDataSource } from "./database/data-source";
import { getRoutes } from "./routers/get-router";

// Instancia a aplicação
const app = express()
app.use(express.json());

// Inicia a conexão com o banco de dados
AppDataSource.initialize()
  .then(() => {
    console.log("Conectado ao banco de dados SQLite via TypeORM.");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error.message);
  });

// Define a rota principal e os demais ENDPOINTs
app.use("/", getRoutes())

// Inicia o servidor e observa as requisições especificas da config PORT
app.listen(process.env.PORT, () => console.log("Servidor conectado!"))
