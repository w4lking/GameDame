
import styles from './FloatingButton.module.css'; 

function FloatingButton({ children, onClick, disabled = false, type = 'button', className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
}

export default FloatingButton