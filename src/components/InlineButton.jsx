import Link from 'next/link';
import styles from './inlineButton.module.css';

const InlineButton = ({ link, children }) => {
  return (
    <Link href={link} className={styles.btn_inline}>
      {children}
    </Link>
  );
};

export default InlineButton;
