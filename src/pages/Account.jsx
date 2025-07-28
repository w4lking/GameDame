
import styles from './Account.module.css';
import NavBar from '../components/layout/NavBar';
import FloatingButton from '../components/common/FloatingButton';


import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import DeathStranding from "../assets/images/deathStrandingImage.png";
import BobEsponja from "../assets/images/bobEsponjaImage.png";
import DeliverUsMars from "../assets/images/deliverUsMarsImage.png";
import Gow from "../assets/images/GodOfWarCard.png";

function Account() {
  const userName = "Nome do Usuário"; 

  return (
    <div className="pageContainer">
      <NavBar />
      <main className={`mainContent ${styles.accountLayout}`}>

        <div className={styles.userInfo}>
          <h1>Olá, &lt;&lt;{userName}&gt;&gt;</h1>
          <p>Seu email é nomeusuario@email.com</p>
          <p>Seu CPF é 123.456.789-00</p>
          
          <div className={styles.actions}>
            <button className={styles.actionButton}>
              Alterar Dados <EditIcon fontSize="small" />
            </button>
            <button className={`${styles.actionButton} ${styles.dangerButton}`}>
              Excluir Conta <DeleteIcon fontSize="small" />
            </button>
            <button className={`${styles.actionButton} ${styles.adminButton}`}>
              Tela do admin <AdminPanelSettingsIcon fontSize="small" />
            </button>
          </div>
        </div>
        
        <aside className={styles.gamesSidebar}>
          <h2>Jogos adquiridos:</h2>
          <div className={styles.gamesGrid}>
            
            <div className={styles.gameCard}>
              <img src={BobEsponja} alt="SpongeBob" />
              <span>100/100</span>
            </div>
            
            <div className={styles.gameCard}>
              <img src={DeliverUsMars} alt="Deliver Us Mars" />
              <span>95/100</span>
            </div>

            <div className={styles.gameCard}>
              <img src={Gow} alt="God of War" />
              <span>75/100</span>
            </div>

            <div className={styles.gameCard}>
              <img src={DeathStranding} alt="Death Stranding" />
              <button className={styles.addReviewButton}>
                <AddCircleOutlineIcon fontSize="small" />
                Adicionar Avaliação
              </button>
            </div>

          </div>
        <FloatingButton><ShoppingCartIcon></ShoppingCartIcon></FloatingButton>
        </aside>
      </main>
    </div>
  );
}

export default Account;
