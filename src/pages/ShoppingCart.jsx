
import styles from './ShoppingCart.module.css';
import NavBar from "../components/layout/NavBar";

import DeathStranding from "../assets/images/deathStrandingImage.png";
import BobEsponja from "../assets/images/bobEsponjaImage.png";
import Pix from "../assets/images/pixImage.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function ShoppingCart() {
  return (
    <div className={styles.pageWrapper}>
      <NavBar />
      <main className={styles.container}>
        <div className={styles.cartSection}>
          <h1 className={styles.sectionTitle}>Carrinho de Compras</h1>
          <div className={styles.cartItem}>
            <div className={styles.itemDetails}>
              <h2>SpongeBob: Battle for BikiniBottom</h2>
              <p className={styles.platform}>Plataforma: PC</p>
              <p className={styles.price}>R$ 299,00</p>
            </div>
            <img src={BobEsponja} alt="Bob Esponja" className={styles.itemImage} />
          </div>

          <div className={styles.cartItem}>
            <div className={styles.itemDetails}>
              <h2>Death Stranding</h2>
              <p className={styles.platform}>Plataforma: PC</p>
              <p className={styles.price}>R$ 299,00</p>
            </div>
            <img src={DeathStranding} alt="Death Stranding" className={styles.itemImage} />
          </div>

          <div className={styles.cartTotal}>
            <span>Total</span>
            <span>R$ 598,00</span>
          </div>
        </div>

        <div className={styles.paymentSection}>
          <h1 className={styles.sectionTitle}>Método de Pagamento</h1>
          
          <div className={styles.paymentOption}>
            <img src={Pix} alt="Ícone Pix" className={styles.paymentIcon} />
            <span>Pix</span>
            <input type="radio" id="pix" name="payment" value="pix" defaultChecked />
            <label htmlFor="pix" className={styles.radioCircle}></label>
          </div>

          <hr className={styles.separator} />

          <div className={styles.termsOption}>
            <input type="checkbox" id="terms" name="terms" />
            <label htmlFor="terms" className={styles.checkboxSquare}></label>
            <span>Eu aceito os termos e condições</span>
          </div>

          <button className={styles.finalizeButton}>
            Finalizar Compra
            <ShoppingCartIcon fontSize="small" />
          </button>
        </div>
      </main>
    </div>
  );
}

export default ShoppingCart;