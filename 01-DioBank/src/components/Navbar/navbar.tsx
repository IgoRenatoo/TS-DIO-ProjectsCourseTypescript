import { Link, useLocation } from "react-router-dom";

import './navbar.css';

export function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className={useLocation().pathname === "/" ? "active" : ""}>
        <input type="button" value="Home" />
      </Link>
      <Link to="/conta" className={useLocation().pathname === "/conta" ? "active" : ""}>
        <input type="button" value="Conta" />
      </Link>
      <Link to="/transferencia" className={useLocation().pathname === "/transferencia" ? "active" : ""}>
        <input type="button" value="Transferências" />
      </Link>
      <Link to="/suporte" className={useLocation().pathname === "/suporte" ? "active" : ""}>
        <input type="button" value="Suporte" />
      </Link>
    </div>
  );
}