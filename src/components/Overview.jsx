import styles from './overview.module.css';

import { FaStar, FaLocationDot } from 'react-icons/fa6';
import InlineButton from './InlineButton';

const Overview = () => {
  return (
    <div className={styles.overview}>
      <h1 className={styles.overview__heading}>Room in a shared house</h1>

      <div className={styles.overview__stars}>
        <FaStar className={styles.overview__icon_star} />
      </div>

      <div className={styles.overview__location}>
        <FaLocationDot className={styles.overview__icon_location} />
        <InlineButton link="/">Sherrington Rd, BN2</InlineButton>
      </div>

      <div className={styles.overview__price}>
        <div className={styles.overview__price_total}>£785</div>
        <div className={styles.overview__price_desc}>per month</div>
      </div>
    </div>
  );
};

export default Overview;
