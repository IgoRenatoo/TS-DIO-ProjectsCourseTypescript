import { Router, Response, Request } from "express";
import { getAllUsers } from "../services/get-user-service";
import { CreateUser } from "../controllers/post-user-controller";
import { clearAllUsers } from "../services/delete-user-service";

const router = Router();

export function getRoutes(){
  // Simulação da página inicial da aplicação.
  router.get("/", (req: Request, res: Response) => {
    res.status(200).send('Você está na página principal da Dio Bank')
  });

  // Busca todos os usuários cadastrados no DB.
  router.get("/users", async (req: Request, res: Response) => {
    res.status(200).send((await getAllUsers()))
  });

  // Adiciona usuário a partir de 'Query Params' - Test.
  router.post("/add", async (req: Request, res: Response) => {
    res.status(201).send(await CreateUser(req, res))
  });

  // Deleta todos usuários do DataBase.
  router.delete("/clear", async (req: Request, res: Response) => {  
    res.status(204).send(await clearAllUsers())
  });

  return router;
}
