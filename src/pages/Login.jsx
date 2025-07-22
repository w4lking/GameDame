// LoginPage.jsx - Nova Estrutura

import styles from './Login.module.css';
import AuthLayout from '../components/layout/AuthLayout';
import Input from '../components/common/Input';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('tentativa de login:', { email, password });
  };

  return (
    <AuthLayout>
      <div className={styles.loginContainer}>

        <div className={styles.mainContent}>
          <h2 className={styles.title}>Login</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input 
              type="email" 
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
              type="password" 
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className={styles.submitButton}><FaArrowRight /></button>

          </form>
        </div>
        
        <div className={styles.links}>
          <Link to="/register">Criar Conta</Link>
          <Link to="/recover-password">Esqueceu a Senha?</Link>
        </div>
      </div>
    </AuthLayout>
  );
}

export default LoginPage;