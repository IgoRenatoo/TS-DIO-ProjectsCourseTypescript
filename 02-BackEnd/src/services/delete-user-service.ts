import { db } from "../database/server-db";

export const clearAllUsers = async () => {
  db.all("DELETE FROM sqlite_sequence");
  db.all("DELETE FROM users");
}
