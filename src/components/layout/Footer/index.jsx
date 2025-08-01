
import logo from '../../../assets/images/FooterLogo.png'; 
import styles from './Footer.module.css';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <img src={logo} alt="Icone da GameDame" />
          <div className={styles.footerBrandInfo}>
            <h2><strong>Game Dame</strong></h2>
            <p>Seu próximo jogo começa aqui</p>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <h2>Explorar</h2>
          <ul>
            <li><a href="/home">Início</a></li>
            <li><a href="/popular">Populares</a></li>
            <li><a href="/account">Conta</a></li>
          </ul>
        </div>

        <div className={styles.footerContact}>
          <h2 className={styles.footerContactTitle}>Contato</h2>
          <ul>

            <li><MailIcon fontSize="s" /><a href="mailto:"> gamedame@teste.com</a></li>
            <li><CallIcon fontSize="s" /> <a href="tel:">(99) 9 9999-9999</a></li>
            <li><PlaceIcon fontSize="s" /> Shopping X, Lavras - MG</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerDues}>
        <p>&copy; {new Date().getFullYear()} Game Dame | By Emakers Júnior</p>
      </div>
    </footer>
  );
}

export default Footer;