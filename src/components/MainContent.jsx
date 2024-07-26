import styles from './mainContent.module.css';

const MainContent = ({ children }) => {
  return <div className={styles.main_content}>{children}</div>;
};

export default MainContent;
