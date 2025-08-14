
import { useState, useRef } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styles from './PasswordInput.module.css'; 

function PasswordInput({ className = '', ...rest }) {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <div className={`${styles.passwordWrapper} ${className}`}>
      <input
        ref={inputRef}
        type={showPassword ? 'text' : 'password'}
        className={styles.input}
        {...rest}
      />
      <div
        role="button"
        tabIndex={0}
        aria-label="alternar visibilidade da senha"
        onClick={handleClickShowPassword}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClickShowPassword()}
        className={styles.toggleIcon}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </div>
    </div>
  );
}

export default PasswordInput;