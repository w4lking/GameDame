
import styles from './AuthFormContainer.module.css';


function AuthFormContainer({ title, children, links }) {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h2 className={styles.title}>{title}</h2>
        {children} 
      </div>
      
      <div className={styles.links}>
        {links}
      </div>
    </div>
  );
}

export default AuthFormContainer;