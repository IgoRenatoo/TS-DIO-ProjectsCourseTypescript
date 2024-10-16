import { db } from "../database/server-db";

export const clearAllUsers = async () => {
  db.all("DELETE FROM users");
  db.all("DELETE FROM sqlite_sequence");
}
