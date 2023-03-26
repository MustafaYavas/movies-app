import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = ({ child }) => {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        {child}

        <Link to="/">HOME</Link>
      </div>
    </div>
  );
};

export default NotFound;
