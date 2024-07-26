import styles from './details.module.css';

const Details = ({ children }) => {
  return <div className={styles.details}>{children}</div>;
};

export default Details;
