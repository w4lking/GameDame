
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grow } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import NavBar from "../../components/layout/NavBar/index.jsx";
import Footer from "../../components/layout/Footer/index.jsx";
import FloatingButton from "../../components/common/FloatingButton/index";
import { gamesData } from "../../data/popularGamesData.js";

import styles from "./Popular.module.css";

function Popular() {
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
          <div className={styles.container}>
            <h1 className={styles.pageTitle}>Populares</h1>

            {gamesData.map((game) => (
              <div key={game.id} className={styles.gameRow}>
                <div className={styles.imageContainer}>
                  <Link to={`/game/${game.id}`}>
                    <span className={styles.rank}>{game.rank}</span>
                    <img src={game.url} alt={game.title} />
                  </Link>
                </div>
                <div className={styles.descriptionContainer}>
                  <h2>{game.title}</h2>
                  <p>{game.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Grow>
        <FloatingButton
          className={styles.cartButton}
          aria-label="Ver carrinho"
          to="/shopping-cart"
        >
          <ShoppingCartIcon />
        </FloatingButton>
      </main>
      <Footer />
    </div>
  );
}

export default Popular;
