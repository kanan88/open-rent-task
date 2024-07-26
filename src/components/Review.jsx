/* eslint-disable @next/next/no-img-element */
import styles from './review.module.css';

const Review = ({ review: { text, image, name, title, rating } }) => {
  return (
    <figure className={styles.review}>
      <blockquote className={styles.review__text}>{text}</blockquote>

      <figcaption className={styles.review__user}>
        <img src={image} alt={name} className={styles.review__photo} />
        <div className={styles.review__user_box}>
          <p className={styles.review__user_name}>{name}</p>
          <p className={styles.review__user_date}>{title}</p>
        </div>
        <div className={styles.review__rating}>{rating}</div>
      </figcaption>
    </figure>
  );
};

export default Review;
