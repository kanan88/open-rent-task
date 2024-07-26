import styles from './list.module.css';

import {
  MdOutlineBedroomParent,
  MdOutlineBathroom,
  MdOutlinePersonAddAlt,
  MdMyLocation,
  MdOutlineLocalParking,
  MdOutlineGrass,
  MdOutlineCleaningServices,
  MdLocationCity,
} from 'react-icons/md';

const List = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        <MdOutlineBedroomParent className={styles.list__icon} />
        <span>Bedrooms: 6</span>
      </li>
      <li className={styles.list__item}>
        <MdOutlineBathroom className={styles.list__icon} />
        <span>Bathrooms: 2</span>
      </li>
      <li className={styles.list__item}>
        <MdOutlinePersonAddAlt className={styles.list__icon} />

        <span>Max tenants: 1</span>
      </li>
      <li className={styles.list__item}>
        <MdMyLocation className={styles.list__icon} />
        <span>Location: Brighton</span>
      </li>
      <li className={styles.list__item}>
        <MdOutlineLocalParking className={styles.list__icon} />
        <span>Free parking</span>
      </li>
      <li className={styles.list__item}>
        <MdOutlineGrass className={styles.list__icon} />
        <span>Private garden</span>
      </li>
      <li className={styles.list__item}>
        <MdOutlineCleaningServices className={styles.list__icon} />
        <span>A regular FREE cleaner</span>
      </li>
      <li className={styles.list__item}>
        <MdLocationCity className={styles.list__icon} />
        <span>Council Tax Band: D</span>
      </li>
    </ul>
  );
};

export default List;
