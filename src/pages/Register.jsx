
import styles from './Register.module.css';
import AuthLayout from '../components/layout/AuthLayout';
import InputCommon from '../components/common/Input';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

function RegisterPage() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('tentativa de login:', { email, password });
  };

  return (
    <AuthLayout>
      <div className={styles.registerContainer}>

        <div className={styles.mainContent}>
          <h2 className={styles.title}>Registrar</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
            <InputCommon
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputCommon
              type="email" 
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputCommon
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <InputCommon
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputCommon
              type="password"
              placeholder="Confirmar Senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit" className={styles.submitButton}><FaArrowRight /></button>

          </form>
        </div>
        
        <div className={styles.links}>
          <Link to="/login">Fazer login</Link>
        </div>
      </div>
    </AuthLayout>
  );
}

export default RegisterPage;