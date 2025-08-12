
import { useState, useEffect } from "react";
import { Grow } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import NavBar from "../../components/layout/NavBar/index.jsx";
import Pix from "../../assets/images/pixImage.png";
import { cartData } from '../../data/cartData.js';

import styles from './ShoppingCart.module.css';

function ShoppingCart() {
  const formatPrice = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const [isLoaded, setIsLoaded] = useState(false);
      
  useEffect(() => {
      const timer = setTimeout(() => setIsLoaded(true), 100);
      return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pageContainer">
      <NavBar />
      <main className="mainContent">
        <Grow in={isLoaded} timeout={700}>
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
        </Grow>
      </main>
    </div>
  );
}

export default ShoppingCart;
