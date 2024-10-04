import { Link, useLocation } from "react-router-dom";
import styles from './navbar.module.css'; // Importando o CSS como module

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={useLocation().pathname === "/" ? styles.active : ""}>
        <button>Home</button>
      </Link>
      <Link to="/conta" className={useLocation().pathname === "/conta" ? styles.active : ""}>
        <button>Conta</button>
      </Link>
      <Link to="/transferencia" className={useLocation().pathname === "/transferencia" ? styles.active : ""}>
        <button>Transferências</button>
      </Link>
      <Link to="/suporte" className={useLocation().pathname === "/suporte" ? styles.active : ""}>
        <button>Suporte</button>
      </Link>
      <Link to="/login" className={useLocation().pathname === "/login" ? styles.active : ""}>
        <button className={styles.loginButton}>Login</button>
      </Link>
    </div>
  );
}