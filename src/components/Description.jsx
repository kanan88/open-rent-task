import styles from './description.module.css';

const Decription = ({ children }) => {
  return <div className={styles.description}>{children}</div>;
};

export default Decription;
