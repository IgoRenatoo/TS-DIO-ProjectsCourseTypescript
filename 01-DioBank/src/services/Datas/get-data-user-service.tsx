import styles from './get-data.module.css';

export function GetData(){
  const user = JSON.parse(localStorage.getItem('user') as string);
  
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
        <h1 className={styles.accountDetails}>
          <button className={styles.button}>Realizar Login</button>
        </h1>
      </main>
    );
  }
}