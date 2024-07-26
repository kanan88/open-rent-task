import styles from './search.module.css';
import { HiMiniMapPin } from 'react-icons/hi2';

const Search = () => {
  return (
    <form action="#" className={styles.search}>
      <input
        type="text"
        className={styles.search__input}
        placeholder="Enter a location to search"
      />
      <button className={styles.search__button}>
        <HiMiniMapPin className={styles.search__icon} />
      </button>
    </form>
  );
};

export default Search;
