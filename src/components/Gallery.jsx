/* eslint-disable @next/next/no-img-element */
import styles from './gallery.module.css';

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <figure className={styles.gallery__item}>
        <img
          src="/img/image1.jpeg"
          alt="Photo of room 1"
          className={styles.gallery__photo}
        />
      </figure>
      <figure className={styles.gallery__item}>
        <img
          src="/img/image2.jpeg"
          alt="Photo of room 2"
          className={styles.gallery__photo}
        />
      </figure>
      <figure className={styles.gallery__item}>
        <img
          src="/img/image3.jpeg"
          alt="Photo of room 3"
          className={styles.gallery__photo}
        />
      </figure>
    </div>
  );
};

export default Gallery;
