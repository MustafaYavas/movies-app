import { useState } from 'react';
import styles from './MovieReview.module.scss';

const MovieReview = ({ reviews }) => {
  const review = reviews[0];
  const [truncate, setTruncate] = useState(
    review?.content.length > 200 ? true : false
  );
  console.log(review);
  return (
    <div className={styles['review-container']}>
      <h1>A viewer's thoughts</h1>
      <div className={styles['review']}>
        <blockquote>
          {!review ? (
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </span>
          ) : (
            <>
              {truncate ? (
                <>
                  {review?.content.substring(0, 200)}{' '}
                  <span
                    style={{
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontStyle: 'italic',
                      color: '#b3b6ba',
                    }}
                    onClick={() => setTruncate(false)}
                  >
                    ... Show more
                  </span>
                </>
              ) : (
                <span>
                  "{review?.content}"{' '}
                  <span
                    style={{
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontStyle: 'italic',
                      color: '#b3b6ba',
                    }}
                    onClick={() => setTruncate(true)}
                  >
                    ... Show less
                  </span>
                </span>
              )}
            </>
          )}
        </blockquote>
      </div>
    </div>
  );
};

export default MovieReview;
