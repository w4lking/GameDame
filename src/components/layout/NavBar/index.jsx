
import { useState } from 'react'; 
import { NavLink} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search'; 
import MenuIcon from '@mui/icons-material/Menu'; 
import CloseIcon from '@mui/icons-material/Close'; 

import icone from '../../../assets/images/perfil_icone.png'; 

import styles from './NavBar.module.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLink = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

  return (
    <nav className={styles.navContainer}>
      <NavLink to="/" className={styles.logo}>
        <img src={icone} alt="Logotipo Game Dame" />
      </NavLink>

      <ul className={`${styles.navList} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <li><NavLink className={getLink} to="/launch" onClick={() => setIsMenuOpen(false)}>Lançamentos</NavLink></li>
        <li><NavLink className={getLink} to="/popular" onClick={() => setIsMenuOpen(false)}>Populares</NavLink></li>
        <li><NavLink className={getLink} to="/genres" onClick={() => setIsMenuOpen(false)}>Gêneros</NavLink></li>
        <li><NavLink className={getLink} to="/promotions" onClick={() => setIsMenuOpen(false)}>Promoções</NavLink></li>
        <li><NavLink className={getLink} to="/account" onClick={() => setIsMenuOpen(false)}>Conta</NavLink></li>
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