import styles from './auth-login.module.css';

import React, { useState } from 'react';
import { AuthenticateUser } from '../Authentication/auth-user-service';
import { useNavigate } from 'react-router-dom';

export function AuthLogin(){
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate() 

  const handleSubmit = async (e: React.FormEvent) => {    
    e.preventDefault(); // Impede o comportamento padrão do formulário, que recarregaria a página após o envio
    
    const isAuthenticated: boolean = AuthenticateUser(username, password); // Chama a função de autenticação

    if (isAuthenticated) {
      navigate('/account'); // Redireciona o usuário para a página de conta
    } else {
      setError('Usuário ou senha inválidos'); // Define o erro caso a autenticação falhe
    }
  };
  return (
    <main>
      <section className={styles.LoginContainer}>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit} className={styles.LoginForm}>
        <h2 className={styles.h2}>Login</h2>
          <div className={styles.InputGroup}>
            <label className={styles.Label} htmlFor="username">Usuário:</label>
            <input
              className={styles.Input}
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.InputGroup}>
            <label className={styles.Label} htmlFor="password">Senha:</label>
            <input
              className={styles.Input}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.LoginButton}>Entrar</button>
        </form>
      </section>
    </main>
  )
};