import NotFound from '../components/NotFound/NotFound';
import styles from './NoPageFound.module.scss';

const NoPageFound = () => {
  return (
    <NotFound
      child={
        <>
          <h1 className={styles.header}>404</h1>
          <p className={styles.message}>Page Not Found</p>
        </>
      }
    />
  );
};

export default NoPageFound;
