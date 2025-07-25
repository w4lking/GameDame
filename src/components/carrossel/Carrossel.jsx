import Slider from "react-slick";


import styles from "./Carrossel.module.css";

import Gow from "../../assets/images/gowImage.png";
import DaysGone from "../../assets/images/daysGImage.png";
import ZeroDown from "../../assets/images/zeroDownImage.png";
import BobEsponja from "../../assets/images/bobEsponjaImage.png";
import DeliverUsMars from "../../assets/images/deliverUsMarsImage.png";
import SpellForce from "../../assets/images/speelForceImage.png";
import Perish from "../../assets/images/perishImage.png";
import DeathStranding from "../../assets/images/deathStrandingImage.png";

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

  const settingsLancamentos = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 820, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className={styles.pageContainer}>
      <Slider {...settingsBanner}>
        <div className={styles.slideBanner}>
          <div className={styles.sideGames}>
            <div className={styles.smallGame}>
              <img src={DaysGone} alt="Days Gone" />
              <span className={styles.discount}>-15%</span>
              <span className={styles.price}>R$ 169,90</span>
            </div>
            <div className={styles.smallGame}>
              <img src={ZeroDown} alt="Horizon Zero Dawn" />
              <span className={styles.discount}>-25%</span>
              <span className={styles.price}>R$ 149,99</span>
            </div>
          </div>
          <div className={styles.mainGame}>
            <img src={Gow} alt="God of War" />
            <span className={styles.discount}>-40%</span>
            <span className={styles.price}>R$ 119,95</span>
          </div>
        </div>
      </Slider>

      <h2 className={styles.sectionTitle}>Lançamentos</h2>
      <Slider {...settingsLancamentos}>
        <div className={styles.card}>
          <img src={BobEsponja} alt="Jogo do Bob Esponja" />
          <span className={styles.cardPrice}>R$ 299,00</span>
        </div>
        <div className={styles.card}>
          <img src={DeliverUsMars} alt="Jogo Deliver Us Mars" />
          <span className={styles.cardPrice}>R$ 299,00</span>
        </div>
        <div className={styles.card}>
          <img src={SpellForce} alt="SpellForce" />
          <span className={styles.cardPrice}>R$ 299,00</span>
        </div>
        <div className={styles.card}>
          <img src={DeathStranding} alt="Death Stranding" />
          <span className={styles.cardPrice}>R$ 299,00</span>
        </div>
        <div className={styles.card}>
          <img src={Perish} alt="Perish" />
          <span className={styles.cardPrice}>R$ 299,00</span>
        </div>
      </Slider>
    </div>
  );
}
