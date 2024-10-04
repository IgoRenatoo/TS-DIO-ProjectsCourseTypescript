import { Link, useLocation } from "react-router-dom";
import styles from './navbar.module.css'; // Importando o CSS como module

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={useLocation().pathname === "/" ? styles.active : ""}>
        <button>Home</button>
      </Link>
      <Link to="/account" className={useLocation().pathname === "/account" ? styles.active : ""}>
        <button>Conta</button>
      </Link>
      <Link to="/transfer" className={useLocation().pathname === "/transfer" ? styles.active : ""}>
        <button>Transferências</button>
      </Link>
      <Link to="/support" className={useLocation().pathname === "/support" ? styles.active : ""}>
        <button>Suporte</button>
      </Link>
      <Link to="/login" className={useLocation().pathname === "/login" ? styles.active : ""}>
        <button className={styles.loginButton}>Login</button>
      </Link>
    </div>
  );
}