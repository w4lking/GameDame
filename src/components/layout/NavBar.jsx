
import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import icone from '../../assets/images/perfil_icone.png'; 
import SearchIcon from '@mui/icons-material/Search'; 
import MenuIcon from '@mui/icons-material/Menu'; 
import CloseIcon from '@mui/icons-material/Close'; 

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navContainer}>
      <Link to="/login" className={styles.logo}>
        <img src={icone} alt="Logotipo Game Dame" />
      </Link>

      <ul className={`${styles.navList} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <li><Link to="/launch" onClick={() => setIsMenuOpen(false)}>Lançamentos</Link></li>
        <li><Link to="/popular" onClick={() => setIsMenuOpen(false)}>Populares</Link></li>
        <li><Link to="/genres" onClick={() => setIsMenuOpen(false)}>Gêneros</Link></li>
        <li><Link to="/promotions" onClick={() => setIsMenuOpen(false)}>Promoções</Link></li>
        <li><Link to="/account" onClick={() => setIsMenuOpen(false)}>Conta</Link></li>
      </ul>

      <div className={styles.searchBar}>
        <input type="text" placeholder="Pesquisar..." />
        <button type="submit" aria-label="Buscar">
          <SearchIcon fontSize="small" />
        </button>
      </div>
      
      <button 
        className={styles.hamburger} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Abrir menu"
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
}

export default NavBar;