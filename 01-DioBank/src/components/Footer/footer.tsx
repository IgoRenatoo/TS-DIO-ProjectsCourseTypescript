import styles from './footer.module.css'; // Importa o CSS Module

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterContent}>
        <p>&copy; 2024 Banco Dio-Bank. Todos os direitos reservados.</p>
        <ul className={styles.FooterLinks}>
          <li><a href="#privacy">Política de Privacidade</a></li>
          <li><a href="#terms ">Termos de Serviço</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>
    </footer>
  );
}