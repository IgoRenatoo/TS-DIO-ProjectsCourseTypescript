export interface IUserData {
  balance: number;
  divide: number;
  credit: number;
  reputation: string;
}
export interface IUser {
  id: string;
  password: string;
  data: IUserData;
}

export const Users: IUser[] = [
  {
    id: 'igor',
    password: '123',
    data:{
      balance: 200,
      divide: 0,
      credit: 200000,
      reputation: 'Excelente'
    }
  },
  {
    id: 'emily',
    password: '1',
    data:{
      balance: -4,
      divide: 2356,
      credit: 50,
      reputation: 'Devedor'
    }
  }
]