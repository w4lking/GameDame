
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { launchGamesData } from "../../../data/launchGamesData";

import styles from "./CarouselLaunch.module.css";

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
        {launchGamesData.map((game) => (
          <div key={game.id} className={styles.card}>
            <img src={game.imageUrl} alt={game.title} />
            <span className={styles.cardPrice}>{game.price}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
}
