import styles from "./Popular.module.css";
import NavBar from "../../components/layout/NavBar/index.jsx";
import Footer from "../../components/layout/Footer/index.jsx";
import FloatingButton from "../../components/common/FloatingButton/index";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { gamesData } from "../../data/popularGamesData.js";

function Popular() {
  return (
    <div className="pageContainer">
      <NavBar />
      <main className="mainContent">
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Populares</h1>

          {gamesData.map((game) => (
            <div key={game.id} className={styles.gameRow}>
              <div className={styles.imageContainer}>
                <span className={styles.rank}>{game.rank}</span>
                <img src={game.imageUrl} alt={game.title} />
              </div>
              <div className={styles.descriptionContainer}>
                <h2>{game.title}</h2>
                <p>{game.description}</p>
              </div>
            </div>
          ))}

          <FloatingButton
            className={styles.cartButton}
            aria-label="Ver carrinho"
            to="/shopping-cart">
            <ShoppingCartIcon />
          </FloatingButton>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Popular;