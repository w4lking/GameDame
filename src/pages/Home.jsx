import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import Carrossel from "../components/carrossel/carrossel.jsx";
import CarrosselLaunch from "../components/carrossel/CarrosselLaunch.jsx";
import styles from "./Home.module.css"; 

function HomePage() {
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

export default HomePage;
