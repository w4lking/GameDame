import styles from './Account.module.css';
import NavBar from '../../components/layout/NavBar.jsx';
import FloatingButton from '../../components/common/FloatingButton/index.jsx';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import { accountData } from '../../data/accountGamesData.js';

function Account() {
  return (
    <div className="pageContainer">
      <NavBar />
      <main className={`mainContent ${styles.accountLayout}`}>

        <div className={styles.userInfo}>
          <h1>Olá, &lt;&lt;{accountData.userName}&gt;&gt;</h1>
          <p>Seu email é {accountData.email}</p>
          <p>Seu CPF é {accountData.cpf}</p>
          
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
            
            {accountData.acquiredGames.map((game) => (
              <div key={game.id} className={styles.gameCard}>
                <img src={game.imageUrl} alt={game.title} />

                {game.score ? (
                  <span>{game.score}</span>
                ) : (
                  <button className={styles.addReviewButton}>
                    <AddCircleOutlineIcon fontSize="small" />
                    Adicionar Avaliação
                  </button>
                )}
              </div>
            ))}

          </div>
          <FloatingButton className={styles.cartButton} to="/shopping-cart">
            <ShoppingCartIcon />
          </FloatingButton>
        </aside>
      </main>
    </div>
  );
}

export default Account;
