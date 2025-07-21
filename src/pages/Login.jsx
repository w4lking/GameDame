
import styles from './Login.module.css';
import AuthLayout from '../components/layout/AuthLayout';

function LoginPage() {
  return (
    <AuthLayout>
      <div className={styles.loginForm}>
        <h2 className={styles.title}>Login</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button type="submit">→</button>
        </form>
        <div className={styles.links}>
            <a href="/register">Registrar</a>
            <a href="/recover-password">Esqueci minha senha</a>
        </div>
      </div>

    </AuthLayout>
  );
}

export default LoginPage;