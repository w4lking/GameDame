

import AuthLayout from '../components/layout/AuthLayout';
import AuthFormContainer from '../components/layout/AuthFormContainer'; 
import Input from '../components/common/Input'; 
import Button from "../components/common/Button"; 
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


import styles from './Register.module.css'; 

function RegisterPage() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('tentativa de registro:', { name, email });
  };

  const pageLinks = (
    <>
      <Link to="/login">Fazer login</Link>
      <Link to="/recover-password">Esqueceu a Senha?</Link>
    </>
  );

  return (
    <AuthLayout>
      <AuthFormContainer title="Registrar" links={pageLinks}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
          <Input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
          <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Input type="password" placeholder="Confirmar Senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          
          <Button type="submit" className={styles.submitButton}>
            <ArrowForwardIcon fontSize="large" />
          </Button>
        </form>
      </AuthFormContainer>
    </AuthLayout>
  );
}

export default RegisterPage;