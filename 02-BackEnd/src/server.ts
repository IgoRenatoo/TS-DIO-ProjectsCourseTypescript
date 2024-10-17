import express from "express";
import 'dotenv/config'

import { getRoutes } from "./routers/get-router";

// Instancia o servidor
const server = express()

// Puxa informações do banco de dados
server.use("/", getRoutes())

// Inicia o servidor e observa as requisições especificas da config PORT
server.listen(process.env.PORT, () => console.log("Servidor conectado!"))
