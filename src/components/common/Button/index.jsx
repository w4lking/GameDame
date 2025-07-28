
import styles from './Button.module.css'; 

function Button({ children, onClick, disabled = false, type = 'button', className = '' }) {
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

export default Button;