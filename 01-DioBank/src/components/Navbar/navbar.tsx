import styles from './navbar.module.css';

import { IUser } from '../../database/users-database';
import { Link } from "react-router-dom";

export function Navbar() {
  const user: IUser = JSON.parse(localStorage.getItem('user') as string);

  return (
    <nav>
      <section className={styles.Navbar}>
        <Link to="/"> <button>Home</button> </Link>
        <Link to="/account"> <button>Conta</button> </Link>
        <Link to="/transfer"> <button>Transferências</button> </Link>
        <Link to="/support"> <button>Suporte</button> </Link>
      </section>

      <section className={styles.Navbar}>
        {!user && (<Link to="/login"> <button className={styles.LoginButton}>Login</button> </Link>)}
      </section>
    </nav>
  );
}