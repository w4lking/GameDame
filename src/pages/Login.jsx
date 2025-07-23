
import AuthLayout from '../components/layout/AuthLayout';
import AuthFormContainer from '../components/layout/AuthFormContainer';
import Input from '../components/common/Input'; 
import Button from "../components/common/Button"; 
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


import styles from './Login.module.css'; 

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('tentativa de login:', { email, password });
    // Aqui você pode adicionar a lógica de autenticação
    // Por exemplo, chamar uma API de login e lidar com a resposta
    window.location.href = '/home';
    
  };

  const pageLinks = (
    <Link to="/">Criar Conta</Link>
  );

  return (
    <AuthLayout>
      <AuthFormContainer title="Login" links={pageLinks}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          
          <Button type="submit" className={styles.submitButton}>
            <ArrowForwardIcon fontSize="large" />
          </Button>
        </form>
      </AuthFormContainer>
    </AuthLayout>
  );
}

export default LoginPage;