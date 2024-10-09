import styles from './get-account.module.css';

import { IUser } from '../../database/users-database';
import { Link } from "react-router-dom";

export function GetAccount(){
  const user: IUser = JSON.parse(localStorage.getItem('user') as string);
  
  const handleLogout = () => {
    localStorage.clear(); // Limpa o localStorage
    window.location.href = '/TS-DIO-ProjectsCourseTypescript/'; // Recarrega a página para simular o logout
  };

  if(user && user.id){
    return (
      <main>
        <section className={styles.Section}>
          <h1>Conta</h1>
        </section>
        <section>
          <div className={styles.AccountDetails}>
            <h1 style={{ color: "rgb(40, 160, 145)" }}>Bem-vindo, {user.id.charAt(0).toUpperCase() + user.id.slice(1)}!</h1>
            <p style={{ fontSize: "18px" }}>
              <b>Saldo:</b> {user.data.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
            <p style={{ fontSize: "18px" }}>
              <b>Dívida:</b> {user.data.divide.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
            <p style={{ fontSize: "18px" }}>
              <b>Crédito:</b> {user.data.credit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
            <p style={{ fontSize: "18px" }}>
              <b>Reputação:</b> {user.data?.reputation ?? "Indisponível"}
            </p>
            <button onClick={handleLogout}>Sair</button>
          </div>
        </section>
      </main>         
    )
  }else{
    return (
      <main>
        <section className={styles.NotLoggedIn}>
          <h2 style={{color: "rgb(40, 160, 145)"}}>Você não está logado</h2>
          <Link to="/login">
            <button>Realizar Login</button>
          </Link>
        </section>
      </main>
    )
  }
};