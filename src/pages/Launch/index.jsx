
import NavBar from "../../components/layout/NavBar/index.jsx";
import Footer from "../../components/layout/Footer/index.jsx";
import Carrossel from "../../components/carrossel/CarouselBanner/index.jsx";
import CarrosselLaunch from "../../components/carrossel/CarouselLaunch/index.jsx";
import styles from "./Launch.module.css"; 

function LaunchPage() {
  return (

    <div className="pageContainer"> 
      <NavBar />
      <main className="mainContent">
        <div className={styles.homeLayout}>
          <div className={styles.sliderColumn}>
            <Carrossel />
          </div>
          <div className={styles.sliderColumn}>
            <CarrosselLaunch />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LaunchPage;
