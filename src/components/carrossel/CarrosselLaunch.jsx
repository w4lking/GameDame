import Slider from "react-slick";
import styles from "./CarrosselLaunch.module.css";
import FloatingButton from "../common/FloatingButton/index";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// 1. Importe APENAS a lista de dados
import { launchGamesData } from "../../data/launchGamesData.js";

export default function LancamentosCarousel() {
  const settingsLancamentos = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 820,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.sectionTitle}>Lançamentos</h2>
      <Slider {...settingsLancamentos}>
        {/* 2. Use .map() para criar um card para cada jogo */}
        {launchGamesData.map((game) => (
          <div key={game.id} className={styles.card}>
            <img src={game.imageUrl} alt={game.title} />
            <span className={styles.cardPrice}>{game.price}</span>
          </div>
        ))}
      </Slider>

      <FloatingButton
        className={styles.cartButton}
        aria-label="Ver carrinho"
        to="/shopping-cart" // Adicionando o link
      >
        <ShoppingCartIcon />
      </FloatingButton>
    </div>
  );
}
