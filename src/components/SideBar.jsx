import styles from './sideBar.module.css';
import {
  FaHouseChimney,
  FaTableList,
  FaCarRear,
  FaUserTie,
} from 'react-icons/fa6';

const SideBar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.side_nav}>
        <li
          className={`${styles.side_nav__item} ${styles.side_nav__item_active}`}
        >
          <a href="#" className={styles.side_nav__link}>
            <FaHouseChimney className={styles.side_nav__icon} />
            <span>Enquiries</span>
          </a>
        </li>
        <li className={styles.side_nav__item}>
          <a href="#" className={styles.side_nav__link}>
            <FaTableList className={styles.side_nav__icon} />
            <span>Dashboard</span>
          </a>
        </li>
        <li className={styles.side_nav__item}>
          <a href="#" className={styles.side_nav__link}>
            <FaCarRear className={styles.side_nav__icon} />
            <span>Viewing</span>
          </a>
        </li>
        <li className={styles.side_nav__item}>
          <a href="#" className={styles.side_nav__link}>
            <FaUserTie className={styles.side_nav__icon} />
            <span>Landlord</span>
          </a>
        </li>
      </ul>

      <div className={styles.legal}>
        &copy; {new Date().getFullYear()} OpenRent Ltd.
      </div>
    </nav>
  );
};

export default SideBar;
