import styles from './cta.module.css';
import CTAButton from './CTAButton';

const CTA = () => {
  return (
    <div className={styles.cta}>
      <h2 className={styles.cta__book_now}>
        We&apos;ve made creating a listing super easy.
      </h2>
      <CTAButton title1="Add listing" title2="Learn more" />
    </div>
  );
};

export default CTA;
