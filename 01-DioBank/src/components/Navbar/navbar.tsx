import './navbar.css'

export function Navbar(){
  return (
    <div className="navbar">
      <input type="button" value="Home" />
      <input type="button" value="Conta" />
      <input type="button" value="Transferências" />
      <input type="button" value="Suporte" />
    </div>
  )
}