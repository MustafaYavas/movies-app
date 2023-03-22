import React, { useEffect, useState } from 'react';
import { AiOutlineClockCircle, AiOutlineTag } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { GENRES } from '../../helpers/constants';
import { getMoviesMDY } from '../../helpers/timeFunctions';
import styles from './Hero.module.scss';

const HeroItem = ({ movies, left, right, right1, right2 }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    if (movies?.genre_ids.length > 2) {
      setGenres(movies?.genre_ids.slice(0, 2));
    } else {
      setGenres(movies?.genre_ids);
    }
  }, [movies?.genre_ids]);

  return (
    <div
      className={styles['hero-wrapper']}
      style={{
        backgroundImage: `${`linear-gradient(to ${
          left ? 'bottom' : 'top'
        }, rgba(12, 39, 56, .1), rgba(12, 39, 56, .1))`}, url(https://image.tmdb.org/t/p/original/${
          movies?.backdrop_path || movies?.poster
        })`,
      }}
    >
      <div
        className={`${left && styles['bg-left-img']}
        ${right1 && styles['bg-right-img-one']} 
        ${right2 && styles['bg-right-img-two']}`}
        style={{
          backgroundImage: `${`linear-gradient(to bottom, rgba(12, 39, 56, .1), rgba(12, 39, 56, 1))`}, 
          url(https://image.tmdb.org/t/p/original/${
            movies?.backdrop_path || movies?.poster
          })`,
        }}
      >
        {true && (
          <div
            className={`${left && styles['movie-left-wrapper']}
        ${right1 && styles['movie-right-wrapper-one']} 
        ${right2 && styles['movie-right-wrapper-two']}`}
          >
            <div className={styles['rating-badge']}>
              <span>{movies.vote_average}</span>
            </div>
            <div
              style={{ fontSize: !right ? '50px' : '25px' }}
              className={`${styles.title}`}
            >
              <span>{movies.original_title}</span>
            </div>
            <div
              className={`${styles['movie-info']} d-flex align-items-center`}
            >
              {left && (
                <span>
                  <AiOutlineTag color="var(--navbar-hover)" size="17" />
                </span>
              )}
              {genres.map((genre) => (
                <Link key={genre} className={styles.genre}>
                  {GENRES[genre]}
                </Link>
              ))}
              {right && (
                <span>
                  <AiOutlineTag color="var(--navbar-hover)" size="17" />
                </span>
              )}
            </div>
            <div className={styles['release-date']}>
              {left && (
                <span>
                  <AiOutlineClockCircle color="var(--navbar-hover)" size="17" />
                </span>
              )}
              <span className={styles['date']}>
                {getMoviesMDY(movies.release_date)}
              </span>
              {right && (
                <span>
                  <AiOutlineClockCircle color="var(--navbar-hover)" size="17" />
                </span>
              )}
            </div>
            {!right && (
              <div className={`${styles.overview} d-none d-lg-block`}>
                <span>{movies.overview}</span>
              </div>
            )}

            <div className={`${styles['movie-footer']} mt-3 mt-lg-0`}>
              <button>READ MORE</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroItem;
