import { Response, Request } from "express";
import { CreateUsers } from "../services/post-user-service";

export const CreateUser = async (req: Request, res: Response) =>{
  const name: string  = req.query.name as string;
  const age: string = req.query.age as string;

  const userCreator = new CreateUsers();
  userCreator.createUser(name, age, res);

  return "Usuário criado com sucesso!"
}
