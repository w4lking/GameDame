import styles from './ShoppingCart.module.css';
import NavBar from "../../components/layout/NavBar/index.jsx";

import Pix from "../../assets/images/pixImage.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { cartData } from '../../data/cartData.js';

function ShoppingCart() {
  // Função para formatar o preço para o padrão brasileiro
  const formatPrice = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="pageContainer">
      <NavBar />
      <main className="mainContent">
        <div className={styles.gridContainer}>
          <div className={styles.cartSection}>
            <h1 className={styles.sectionTitle}>Carrinho de Compras</h1>
            {cartData.items.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemDetails}>
                  <h2>{item.title}</h2>
                  <p className={styles.platform}>{item.platform}</p>
                  <p className={styles.price}>{formatPrice(item.price)}</p>
                </div>
                <img src={item.imageUrl} alt={item.title} className={styles.itemImage} />
              </div>
            ))}
            <div className={styles.cartTotal}>
              <span>Total</span>
              <span>{formatPrice(cartData.total)}</span>
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
        </div>
      </main>
    </div>
  );
}

export default ShoppingCart;
