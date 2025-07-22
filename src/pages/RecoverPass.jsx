import styles from "./RecoverPass.module.css";
import AuthLayout from "../components/layout/AuthLayout";
import InputCommon from "../components/common/Input";
import ButtonCommon from "../components/common/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function RecoverPassPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("tentativa de recuperação de senha:", { email });
  };

  return (
    <AuthLayout>
      <div className={styles.recoverContainer}>
        <div className={styles.mainContent}>
          <h2 className={styles.title}>Recuperar Senha</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <InputCommon
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ButtonCommon type="submit">
              <ArrowForwardIcon fontSize="large" />
            </ButtonCommon>
          </form>
        </div>

        <div className={styles.links}>
          <Link to="/">Criar Conta</Link>
          <Link to="/login">Fazer Login</Link>
        </div>
      </div>
    </AuthLayout>
  );
}

export default RecoverPassPage;
