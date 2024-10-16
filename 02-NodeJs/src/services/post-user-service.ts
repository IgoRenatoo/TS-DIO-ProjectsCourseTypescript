import { db } from "../database/server-db";

export class CreateUsers {
  createUser = async (name: string, idade: string, res: any) => {
    const user = { name, idade };

    db.run(
      "INSERT INTO users (nome, idade) VALUES (?, ?)",
      [user.name, user.idade]
    );
  };
}
