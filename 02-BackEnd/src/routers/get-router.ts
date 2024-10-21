import { Router } from "express";
import { PagInitial, GetUsers, CreateUser, DeleteUsers } from "../controllers/user-controller";

const router = Router();

export function getRoutes(){
  // Simulação da página inicial da aplicação.
  router.get("/", PagInitial );

  // Busca todos os usuários cadastrados no DB.
  router.get("/users", GetUsers );

  // Adiciona usuário a partir de 'Query Params' - Test.
  router.post("/post-user", CreateUser );

  // Deleta todos usuários do DataBase.
  router.delete("/clear", DeleteUsers );

  return router;
}
