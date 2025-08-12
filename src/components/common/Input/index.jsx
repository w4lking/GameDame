
import styles from './Input.module.css'; 

function Input({ type = 'text', className = '', ...rest }) {
  return (
    <input
      type={type}
      className={`${styles.input} ${className}`} 
      {...rest}
    />
  );
}

export default Input;