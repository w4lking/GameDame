
import Slider from "react-slick";
import styles from "./Carrossel.module.css";

import Gow from "../../assets/images/gowImage.png";
import DaysGone from "../../assets/images/daysGImage.png";
import ZeroDown from "../../assets/images/zeroDownImage.png";

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
        <div className={styles.slideBanner}>
          <img src={Gow} alt="God of War" />
          <div className={styles.overlay}>
            <span className={styles.discount}>-40%</span>
            <span className={styles.price}>R$ 119,95</span>
          </div>
        </div>

        <div className={styles.slideBanner}>
          <img src={DaysGone} alt="Days Gone" />
          <div className={styles.overlay}>
            <span className={styles.discount}>-15%</span>
            <span className={styles.price}>R$ 169,90</span>
          </div>
        </div>

        <div className={styles.slideBanner}>
          <img src={ZeroDown} alt="Horizon Zero Dawn" />
          <div className={styles.overlay}>
            <span className={styles.discount}>-25%</span>
            <span className={styles.price}>R$ 149,99</span>
          </div>
        </div>
      </Slider>
    </div>
  );
}