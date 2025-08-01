
import { useParams } from 'react-router-dom';
import styles from "./ViewGame.module.css";
import NavBar from "../../components/layout/NavBar/index.jsx";
import Footer from "../../components/layout/Footer/index.jsx";
import FloatingButton from "../../components/common/FloatingButton/index";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { bannerGamesData } from "../../data/bannerGamesData.js";


const allGames = [
  ...bannerGamesData.flatMap(slide => [
    slide.smallImage1,
    slide.smallImage2,
    slide.mainImage
  ])
];
const uniqueGames = Array.from(new Map(allGames.map(game => [game.id, game])).values());


function ViewGamePage() {
  const { gameID } = useParams();

  const game = uniqueGames.find((g) => g.id === gameID);

  if (!game) {
    return (
      <div className="pageContainer">
        <NavBar />
        <main className="mainContent" style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Jogo não encontrado!</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="pageContainer">
      <NavBar />
      <main className="mainContent">
        <div className={styles.container}>
          <div className={styles.gameRow}>
            <div className={styles.imageContainer}>
              <span className={styles.rank}>{game.discount || '98%'}</span>
              <img src={game.url} alt={game.title} />
              <div className={styles.priceOverlay}>
                <span className={styles.price}>{game.price}</span>
              </div>
            </div>
            <div className={styles.descriptionContainer}>
              <h2>{game.title}</h2>
              <p>{game.description || 'Descrição não disponível.'}</p>
              <div className={styles.buttonGroup}>
                <button>Adicionar ao Carrinho 🛒</button>
                <button>Solicitar Reembolso</button>
              </div>
            </div>
          </div>

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