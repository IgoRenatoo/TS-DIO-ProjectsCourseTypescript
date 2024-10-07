import styles from './navbar.module.css';

import { IUser } from '../../database/users-database';
import { Link, Location, useLocation } from "react-router-dom";

export function Navbar() {
  const user: IUser = JSON.parse(localStorage.getItem('user') as string);
  const location: Location = useLocation();

  return (
    <nav>
      <Link to="/" className={location.pathname === "/" ? styles.active : ""}>
        <button>Home</button>
      </Link>
      <Link to="/account" className={location.pathname === "/account" ? styles.active : ""}>
        <button>Conta</button>
      </Link>
      <Link to="/transfer" className={location.pathname === "/transfer" ? styles.active : ""}>
        <button>Transferências</button>
      </Link>
      <Link to="/support" className={location.pathname === "/support" ? styles.active : ""}>
        <button>Suporte</button>
      </Link>
      {!user && (
        <Link to="/login" className={location.pathname === "/login" ? styles.active : ""}>
          <button className={styles.loginButton}>Login</button>
        </Link>
      )}
    </nav>
  );
}