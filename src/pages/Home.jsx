
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

import Carrossel from "../components/carrossel/carrossel.jsx";
import CarrosselLaunch from "../components/carrossel/CarrosselLaunch.jsx";
import styles from "../components/carrossel/Carrossel.module.css";



function HomePage() {
    return (
    <div className={styles.homeLayout}>
      <NavBar />
      <div className={styles.sliderColumn}>
        <Carrossel />
      </div>
      <div className={styles.sliderColumn}>
        <CarrosselLaunch />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;