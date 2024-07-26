import styles from './header.module.css';

import Logo from './Logo';
import Search from './Search';
import UserNav from './UserNav';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Search />
      <UserNav />
    </header>
  );
};

export default Header;
