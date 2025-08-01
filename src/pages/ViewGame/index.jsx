import NavBar from "../../components/layout/NavBar/index.jsx";
import Footer from "../../components/layout/Footer/index.jsx";

import FloatingButton from "../../components/common/FloatingButton/index";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import styles from "./ViewGame.module.css";

import { gamesData } from "../../data/popularGamesTest.js";

function ViewGamePage() {
  return (
    <div className="pageContainer">
      <NavBar />
      <main className="mainContent">
        <div className={styles.container}>
          {gamesData.map((game) => (
            <div className={styles.gameRow} key={game.id}>
              <div className={styles.imageContainer}>
                <span className={styles.rank}>98%</span>
                <img src={game.imageUrl} alt={game.title} />
                <div className={styles.priceOverlay}>
                  <span className={styles.price}>{game.price}</span>
                </div>     
              </div>
              <div className={styles.descriptionContainer}>
                <h2>{game.title}</h2>
                <p>{game.description}</p>
                <div className={styles.buttonGroup}>
                  <button>Adicionar ao Carrinho 🛒</button>
                  <button>Solicitar Reembolso</button>
                </div>
              </div>
            </div>
          ))}
          <FloatingButton
            className={styles.cartButton}
            aria-label="Ver carrinho"
            to="/shopping-cart"
          >
            <ShoppingCartIcon />
          </FloatingButton>
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default ViewGamePage;
