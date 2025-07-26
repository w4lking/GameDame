
import Slider from "react-slick";
import styles from "./CarrosselLaunch.module.css";
import FloatingButton from "../common/FloatingButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


import BobEsponja from "../../assets/images/bobEsponjaImage.png";
import DeliverUsMars from "../../assets/images/deliverUsMarsImage.png";
import SpellForce from "../../assets/images/speelForceImage.png";
import Perish from "../../assets/images/perishImage.png";
import DeathStranding from "../../assets/images/deathStrandingImage.png";

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

      <FloatingButton
        className={styles.cartButton}
        aria-label="Ver carrinho"
      >
        <ShoppingCartIcon />
      </FloatingButton>
    </div>
  );
}