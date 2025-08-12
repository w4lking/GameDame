
import { useState, useEffect } from "react";
import { Grow } from "@mui/material";

import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";
import FloatingButton from "../../components/common/FloatingButton";

import styles from "./Promotions.module.css";

function PromotionsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

    return (
      <div className="pageContainer">
        <NavBar />
        <Grow in={isLoaded} timeout={700}>
          <main className="mainContent" style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>A página de PROMOÇÕES será criada em breve!</h1>
          </main>
        </Grow>
        <Footer />
      </div>
    );
  }

export default PromotionsPage;
