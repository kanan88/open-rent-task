/* eslint-disable @next/next/no-img-element */
import styles from './userNav.module.css';
import { HiChatAlt2 } from 'react-icons/hi';
import { HiMiniStar } from 'react-icons/hi2';

const UserNav = () => {
  return (
    <nav className={styles.user_nav}>
      <div className={styles.user_nav__icon_box}>
        <HiMiniStar className={styles.user_nav__icon} />
        <span className={styles.user_nav__notification}>7</span>
      </div>
      <div className={styles.user_nav__icon_box}>
        <HiChatAlt2 className={styles.user_nav__icon} />
        <span className={styles.user_nav__notification}>4</span>
      </div>
      <div className={styles.user_nav__user}>
        <img
          className={styles.user_nav__user_photo}
          src="/img/user.jpg"
          alt="User photo"
        />
        <span className="user-nav__user-name">Kanan</span>
      </div>
    </nav>
  );
};

export default UserNav;
