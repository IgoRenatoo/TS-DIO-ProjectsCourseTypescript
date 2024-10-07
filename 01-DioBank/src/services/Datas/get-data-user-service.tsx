import styles from './get-data.module.css';

import { IUser } from '../../database/users-database';
import { Link, Location, useLocation } from "react-router-dom";

export function GetData(){
  const user: IUser = JSON.parse(localStorage.getItem('user') as string);
  const location: Location = useLocation();
  
  const handleLogout = () => {
    localStorage.clear(); // Limpa o localStorage
    window.location.reload(); // Recarrega a página para simular o logout
  };
  
  if(user && user.id){
    return (
      <main>
        <div className={styles.accountDetails}>
          <h1 style={{color:"#007bff"}}>Bem-vindo, {user.id}!</h1>
          <p style={{fontSize:"18px"}}><b>Saldo:</b> {user.data?.balance}</p>
          <p style={{fontSize:"18px"}}><b>Dívida:</b> {user.data?.divide}</p>
          <p style={{fontSize:"18px"}}><b>Crédito:</b> {user.data?.credit}</p>
          <p style={{fontSize:"18px"}}><b>Reputação:</b> {user.data?.reputation}</p>
          <button className={styles.button} onClick={handleLogout}>Sair</button>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <Link to="/login" className={location.pathname === "/login" ? styles.active : ""}>
          <button className={styles.button}>Realizar Login</button>
        </Link>
      </main>
    );
  }
}