import { db } from "../database/server-db";

export const getAllUsers = async () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM users", (err, rows) => {
      if (err) {
        reject(err); // Rejeita a promise em caso de erro
      } else {
        resolve(rows); // Resolver a Promise com os dados recuperados
      }
    });
  });
};
