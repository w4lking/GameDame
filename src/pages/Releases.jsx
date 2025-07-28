import NavBar from "../components/layout/NavBar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Carrossel from "../components/carrossel/carrossel.jsx";
import CarrosselLaunch from "../components/carrossel/CarrosselLaunch.jsx";
import styles from "./Releases.module.css"; 

function ReleasesPage() {
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

export default ReleasesPage;
