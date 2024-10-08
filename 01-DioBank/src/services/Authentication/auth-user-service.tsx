import { Users } from "../../database/users-database";

export const AuthenticateUser = (username: string, password: string): boolean => {
  const user = Users.find((user) => user.id === username && user.password === password);
  if(user){
    localStorage.setItem('user', JSON.stringify(user));
    return true;
  }else{
    return false;
  }
};