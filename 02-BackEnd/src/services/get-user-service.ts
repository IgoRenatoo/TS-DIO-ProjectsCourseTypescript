import { db } from "../database/server-db";

export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM users", (err, rows) => {
      if (err) {
        reject(err); // Rejeita a promise em caso de erro
      } else {
        console.log(rows);
        resolve(rows); // Resolve a promise com os dados
      }
    });
  });
};
