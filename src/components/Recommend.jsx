/* eslint-disable @next/next/no-img-element */
import styles from './recommend.module.css';

const Recommend = () => {
  return (
    <div className={styles.recommend}>
      <p className={styles.recommend__count}>
        Isabelle and 3 other people previously rented this property.
      </p>
      <div className={styles.recommend__friends}>
        <img
          src="/img/user-3.jpg"
          alt="Friend 1"
          className={styles.recommend__photo}
        />
        <img
          src="/img/user-4.jpg"
          alt="Friend 2"
          className={styles.recommend__photo}
        />
        <img
          src="/img/user-5.jpg"
          alt="Friend 3"
          className={styles.recommend__photo}
        />
        <img
          src="/img/user-6.jpg"
          alt="Friend 4"
          className={styles.recommend__photo}
        />
      </div>
    </div>
  );
};

export default Recommend;
