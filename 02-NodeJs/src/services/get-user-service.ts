// Função para buscar todos os usuários
import { db } from "../database/server-db";

export const getAllUsers = async () => {
  return new Promise((send, reject) => {
    db.all("SELECT * FROM users", (err, rows) => {
      if (err) {
        reject(err);
      } else {
        send(rows);
      }
    });
  });
};
