
import styles from './Input.module.css'; 

function Input({ type = 'text', placeholder = '', value, onChange, className = '' }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${styles.input} ${className}`} 
    />
  );
}

export default Input;