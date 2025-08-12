
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import AuthLayout from '../../components/layout/AuthLayout';
import AuthFormContainer from '../../components/layout/AuthFormContainer'; 
import Input from '../../components/common/Input/index'; 
import Button from "../../components/common/Button/index"; 

import styles from './RecoverPass.module.css'; 

function RecoverPass() {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('tentativa de recuperação de senha:', { email });

    alert('Sucesso!');
    
    navigate('/');
  };

  const pageLinks = (
    <>
      <Link to="/register">Criar Conta</Link>
      <Link to="/">Fazer login</Link>
    </>
  );

  return (
    <AuthLayout>
      <AuthFormContainer title="Recuperar Senha" links={pageLinks}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Button type="submit" className={styles.submitButton}>
            <ArrowForwardIcon fontSize="large" />
          </Button>
        </form>
      </AuthFormContainer>
    </AuthLayout>
  );
}

export default RecoverPass;
