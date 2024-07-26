import styles from './list.module.css';

const List = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>Bedrooms: 6</li>
      <li className={styles.list__item}>Bathrooms: 2</li>
      <li className={styles.list__item}>Max tenants: 1</li>
      <li className={styles.list__item}>Location: Brighton</li>
      <li className={styles.list__item}>Free parking</li>
      <li className={styles.list__item}>Private garden</li>
      <li className={styles.list__item}>A regular FREE cleaner</li>
      <li className={styles.list__item}>Council Tax Band: D</li>
    </ul>
  );
};

export default List;
