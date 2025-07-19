import logo from '../../assets/images/perfil_icone.png'; 

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo} alt="Icone da GameDame" />
          <div>
            <h2><strong>Game Dame</strong></h2>
            <p>Seu próximo jogo começa aqui</p>
          </div>
        </div>

        <div className="footer-links">
          <h2>Explorar</h2>
          <ul>
            <li><a href="/home">Início</a></li>
            <li><a href="/popular">Populares</a></li>
            <li><a href="/account">Conta</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h2>Contato</h2>
          <ul>

            <li><a href="mailto:">gamegamedame@teste.com</a></li>

            <li><a href="tel:">(99) 9 9999-9999</a></li>
            <li>Shopping X, Lavras - MG</li>
          </ul>
        </div>
      </div>

      <div className="footer-dues">
        <p>&copy; {new Date().getFullYear()} Game Dame | By Emakers Júnior</p>
      </div>
    </footer>
  );
}

export default Footer;