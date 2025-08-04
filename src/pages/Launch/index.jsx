
import { useState, useEffect } from 'react';
import { Grow } from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import NavBar from "../../components/layout/NavBar/index.jsx";
import Footer from "../../components/layout/Footer/index.jsx";
import Carrossel from "../../components/carrossel/CarouselBanner/index.jsx";
import CarrosselLaunch from "../../components/carrossel/CarouselLaunch/index.jsx";
import FloatingButton from "../../components/common/FloatingButton/index.jsx";

import styles from "./Launch.module.css"; 

function LaunchPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (

    <div className="pageContainer"> 
      <NavBar />
      <Grow in={isLoaded} timeout={700}>
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
      </Grow>
      
      
      <FloatingButton
        className={styles.cartButton}
        aria-label="Ver carrinho"
        to="/shopping-cart" 
      >
        <ShoppingCartIcon />
      </FloatingButton>
      <Footer />
    </div>
  );
}

export default LaunchPage;
