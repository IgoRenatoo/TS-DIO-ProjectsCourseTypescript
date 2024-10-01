export interface AccountData {
  name: string,
  email: string,
  password: string;
}

 const accountData: AccountData = {
  name: 'Testinho Souza',
  email: 'test@dio.bank',
  password: '123'
 }

 export const api: Promise<AccountData> = new Promise((resolve) => {
  setTimeout(() => resolve(accountData),3000)
})