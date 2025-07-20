
import AuthLayout from "../components/layout/AuthLayout";

function LoginPage() {
    return (
        <AuthLayout>
            <form>
                <h2>Login</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <button type="submit">→</button>
                {/* Links como "Esqueceu a senha?" etc. viriam aqui */}
                <p><a href="/register">Criar Conta</a></p>
                <p><a href="/forgot-password">Esqueceu a senha?</a></p>
            </form>
        </AuthLayout>
    );
}

export default LoginPage;
