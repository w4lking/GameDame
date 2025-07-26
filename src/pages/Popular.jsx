
import styles from './Popular.module.css';
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 


import Gow from "./../assets/images/gowImage.png";
import DaysGone from "./../assets/images/daysGImage.png";
import ZeroDown from "./../assets/images/zeroDownImage.png";

function Popular() {
  return (
    <div className={styles.pageWrapper}>
      <NavBar />
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Populares</h1>
        
        <div className={styles.gameRow}>
          <div className={styles.imageContainer}>
            <span className={styles.rank}>1º</span>
            <img src={Gow} alt="God of War" />
          </div>
          <div className={styles.descriptionContainer}>
            <h2>God of War</h2>
            <p>Kratos é pai novamente. Como mentor e protetor de Atreus, um filho determinado a ganhar seu respeito, ele é forçado a encarar e controlar a fúria que há muito tempo o define enquanto viaja por um mundo ameaçador com o seu filho. Com a vingança contra os deuses do Olimpo no passado, Kratos agora vive no reino das divindades e monstros nórdicos. É nesse mundo duro e impiedoso que ele deve lutar para sobreviver enquanto ensina seu filho a fazer o mesmo e tenta impedi-lo de repetir os erros cruéis do Fantasma de Esparta.</p>
          </div>
        </div>

        <div className={styles.gameRow}>
          <div className={styles.imageContainer}>
            <span className={styles.rank}>2º</span>
            <img src={ZeroDown} alt="Horizon Zero Dawn" />
          </div>
          <div className={styles.descriptionContainer}>
            <h2>Horizon Zero Dawn</h2>
            <p>Em um futuro distante, dominado por máquinas colossais que vagam pela Terra, a natureza retomou as ruínas da nossa civilização esquecida e pequenos grupos de sobreviventes se dividem em diferentes tribos. Empunhe o arco e a lança de Aloy, uma jovem caçadora de máquinas exilada da sua tribo, que parte em busca da verdade sobre suas origens e o misterioso mundo que ela precisa salvar.</p>
          </div>
        </div>

        <div className={styles.gameRow}>
          <div className={styles.imageContainer}>
            <span className={styles.rank}>3º</span>
            <img src={DaysGone} alt="Days Gone" />
          </div>
          <div className={styles.descriptionContainer}>
            <h2>Days Gone</h2>
            <p>Days Gone é um jogo de ação e aventura em mundo aberto que se passa em um ambiente adverso dois anos após uma pandemia mundial devastadora.Entre na pele do antigo motociclista fora da lei Deacon St. John, um caçador de recompensas que tenta achar uma razão para viver numa terra cercada pela morte. Vasculhe assentamentos abandonados em busca de equipamentos para produzir itens e armas valiosos ou arrisque-se com outros sobreviventes que tentam ganhar a vida honestamente... ou de formas mais violentas.</p>
          </div>
        </div>

        <button className={styles.floatingCartButton} aria-label="Ver carrinho">
          <ShoppingCartIcon />
        </button>

      </main>
      <Footer />
    </div>
  );
}

export default Popular;