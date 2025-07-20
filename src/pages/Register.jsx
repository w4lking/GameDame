
import AuthLayout from "../components/layout/AuthLayout";

function RegisterPage() {
    return (
        <AuthLayout>
            <form>
                <h2>Register</h2>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <button type="submit">→</button>
                {/* Links como "Já tem uma conta?" etc. viriam aqui */}
                <p><a href="/login">Fazer Login</a></p>
            </form>
        </AuthLayout>
    );
}

export default RegisterPage;
