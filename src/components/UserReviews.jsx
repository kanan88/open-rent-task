import styles from './userReviews.module.css';

const UserReviews = ({ children }) => {
  return <div className={styles.user_reviews}>{children}</div>;
};

export default UserReviews;
