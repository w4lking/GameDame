
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import icone from '../../assets/images/perfil_icone.png'; 
import SearchIcon from '@mui/icons-material/Search'; 

function NavBar() {
  return (
    <nav className={styles.navContainer}>
      <Link to="/login" className={styles.logo}>
        <img src={icone} alt="Logotipo Game Dame" />
      </Link>

      <ul className={styles.navList}>
        <li><Link to="/launches">Lançamentos</Link></li>
        <li><Link to="/popular">Populares</Link></li>
        <li><Link to="/genres">Gêneros</Link></li>
        <li><Link to="/promotions">Promoções</Link></li>
        <li><Link to="/account">Conta</Link></li>
      </ul>

      <div className={styles.searchBar}>
        <input type="text" placeholder="" />
        <button type="submit" aria-label="Buscar">
          <SearchIcon fontSize="small" />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;