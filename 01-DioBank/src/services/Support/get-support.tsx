import styles from "./get-support.module.css";

import { useState } from "react";

export function GetSupport(){  
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Mensagem enviada por ${name} com sucesso!`);    
    setName(""); // Limpa os campo setName
    setEmail(""); // Limpa os campo setEmail
    setMessage(""); // Limpa os campo setMessage
  };
  return (
    <main>
      <section className={styles.Section}>
      <h1>Suporte</h1>
      </section>
      <section className={styles.Section}>
        <h2>Entre em Contato Conosco</h2>
        <form onSubmit={handleSubmit} className={styles.ContactForm}>
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
      <section className={styles.Section}>
        <h2>Perguntas Frequentes</h2>
        <ul>
          <li>
            <strong>Como posso resetar minha senha?</strong>
            <p>Para resetar sua senha, clique em "Esqueci minha senha" na página de login e siga as instruções.</p>
          </li>
          <li>
            <strong>Como faço uma transferência?</strong>
            <p>Você pode realizar transferências acessando a seção de Transferências no menu principal após acessar sua conta.</p>
          </li>
          <li>
            <strong>O que devo fazer se encontrar um problema com minha conta?</strong>
            <p>Entre em contato com o suporte através do formulário acima ou ligue para nossa central de atendimento.</p>
          </li>
        </ul>
      </section>
    </main>
  )
};