import { IUser, Users } from "../../database/users-database";

interface IAuthResult {
  isValid: boolean,
  user?: IUser;
}

export const AuthUser = (username: string, password: string): IAuthResult => {
  const user = Users.find((user) => user.id === username && user.password === password);
  if (user) {
    return { isValid: true, user };
  }else{
    return { isValid: false };
  }
};