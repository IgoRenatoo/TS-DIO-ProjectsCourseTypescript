import styles from "./get-transfer.module.css";

import { Link } from "react-router-dom";
import { useState } from "react";

export function GetTransfer(){
  const [recipient, setRecipient] = useState<string>("");
  const [amount, setAmount] = useState<string>("");  
  const user = JSON.parse(localStorage.getItem('user') as string);

  // Lógica para validar a transferência
  const handleTransfer = (event: React.FormEvent) => {
    event.preventDefault();

    if (user && user.data?.balance >= parseFloat(amount)) {
      alert(`Transferência de R$ ${amount} para ${recipient} realizada com sucesso!`);
    } else {
      alert("Saldo insuficiente ou usuário não encontrado!");
    }
  };
  if(user){
    return (
      <main>
        <section className={styles.Section}>
          <h1> Transferência</h1>
        </section>
        <section className={styles.TransferContainer}>
          <h2>Realizar Transferência</h2>
          <form onSubmit={handleTransfer} className={styles.TransferForm}>
            <div>
              <label htmlFor="recipient">Destinatário:</label>
              <input
                type="text"
                id="recipient"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="amount">Valor:</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.button}>Transferir</button>
          </form>
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