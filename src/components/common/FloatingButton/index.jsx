import styles from './FloatingButton.module.css'; 
import { Link } from 'react-router-dom';

function FloatingButton({ children, className = '' }) {
  return (
    <Link to="/cart" className={`${styles.button} ${className}`}>
      {children}
    </Link>
  );
}

export default FloatingButton;