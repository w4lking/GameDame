
import styles from './AuthLayout.module.css';
import authImage from '../../assets/images/mago_image.png';

function AuthLayout({ children }) {
    return (
        <div className={styles.authContainer}>
            <div className={styles.authFormSection}>
                {children}
            </div>
            <div className={styles.authImageSection}>
                <img src={authImage} alt="Imagem de Mago" />
            </div>
        </div>
    );
}

export default AuthLayout;