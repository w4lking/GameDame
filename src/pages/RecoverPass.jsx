
import AuthLayout from '../components/layout/AuthLayout';
import AuthFormContainer from '../components/layout/AuthFormContainer'; 
import Input from '../components/common/Input/index'; 
import Button from "../components/common/Button/index"; 
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import styles from './RecoverPass.module.css'; 

function RecoverPass() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('tentativa de recuperação de senha:', { email });
  };

  const pageLinks = (
    <>
      <Link to="/">Criar Conta</Link>
      <Link to="/login">Fazer login</Link>
    </>
  );

  return (
    <AuthLayout>
      <AuthFormContainer title="Recuperar Senha" links={pageLinks}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Button type="submit" className={styles.submitButton}>
            <ArrowForwardIcon fontSize="large" />
          </Button>
        </form>
      </AuthFormContainer>
    </AuthLayout>
  );
}

export default RecoverPass;
