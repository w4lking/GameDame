import Slider from "react-slick";
import styles from "./Carrossel.module.css";

import { bannerGamesData } from "../../data/bannerGamesData.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carrossel() {
  const settingsBanner = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };

  return (
    <div className={styles.pageContainer}>
      <Slider {...settingsBanner}>
        {bannerGamesData.map((game) => (
          <div key={game.id} className={styles.slideBanner}>
            <img src={game.imageUrl} alt={game.title} />
            <div className={styles.overlay}>
              <span className={styles.discount}>{game.discount}</span>
              <span className={styles.price}>{game.price}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
