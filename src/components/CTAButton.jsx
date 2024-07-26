import styles from './cta.module.css';

const CTAButton = ({ title1, title2 }) => {
  return (
    <button className={styles.btn}>
      <span className={styles.btn__visible}>{title1}</span>
      <span className={styles.btn__invisible}>{title2}</span>
    </button>
  );
};

export default CTAButton;
