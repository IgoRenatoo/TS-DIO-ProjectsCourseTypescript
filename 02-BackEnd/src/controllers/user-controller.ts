import { Response, Request } from "express";
import { Users } from "../services/user-service";

const User = new Users();

export const PagInitial = async (req: Request, res: Response) => {
  try {
    res.status(200).send("Página inicial do projeto!");
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Erro ao acessar a página inicial!" });
  }
}

export const GetUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.getAllUsers(); // Chama a função para obter todos os usuários
    res.status(200).json(users); // Retorna a lista de usuários
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar usuários" });
  }
};

export const CreateUser = async (req: Request, res: Response) => {
  try {
    const { name, age, sexo } = req.body;
    const newUser = await User.toCreate(name, parseInt(age), sexo); // Chama a função para criar o usuário
    res.status(201).json({ message: "Usuário criado com sucesso!", user: newUser }); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar usuário" });
  }
}

export const DeleteUsers = async (req: Request, res: Response) => {
  try {
    const clear = await User.ClearData()
    res.status(204).send(); // Retorna 204 No Content após a limpeza 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao deletar usuários" });
  }
}
