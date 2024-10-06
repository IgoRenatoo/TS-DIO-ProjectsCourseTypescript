import styles from './login.module.css';

import React, { useState } from 'react';
import { AuthUser } from '../Authentication/auth-user-service';


export function Login(){
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {    
    e.preventDefault(); // Impede o comportamento padrão do formulário, que recarregaria a página após o envio
    
    const AuthResult = AuthUser(username, password); // Chama a função de validação
    
    if (AuthResult.isValid === true) { // Verifica se a autenticação foi bem-sucedida
      localStorage.setItem('user', JSON.stringify(AuthResult.user)); 
      window.location.href = '/account';
    } else {
      setError('Usuário ou senha inválidos');
    }
  };

  return (
    <main>
      <div className={styles.loginContainer}>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2 className={styles.h2}>Login</h2>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="username">Usuário:</label>
            <input
              className={styles.input}
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha:</label>
            <input
              className={styles.input}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.loginButton}>Entrar</button>
        </form>
      </div>
    </main>
  );
};