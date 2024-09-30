import './footer.css'

export function Footer(){
  return (
  <footer className="footer">
    <div className="footer-content">
        <p>&copy; 2024 Banco Fictício. Todos os direitos reservados.</p>
        <ul className="footer-links">
            <li><a href="#privacidade">Política de Privacidade</a></li>
            <li><a href="#termos">Termos de Serviço</a></li>
            <li><a href="#contato">Contato</a></li>
        </ul>
    </div>
</footer>
)
}