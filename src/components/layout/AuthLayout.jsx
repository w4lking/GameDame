
import authImage from '../../assets/images/mago_image';

function AuthLayout({ children }) {
    return (
        <div className="auth-container">
            <div className="auth-form-section">
                {children}
            </div>
            <div className="auth-image-section">
                <img src={authImage} alt="Imagem de Mago" />
            </div>
        </div>
    );
}

export default AuthLayout;