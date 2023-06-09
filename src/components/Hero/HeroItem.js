import { AiOutlineClockCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { getMoviesMDY } from '../../helpers/timeFunctions';
import Genre from '../Genre/Genre';
import { BG_IMAGES } from '../../helpers/constants';
import styles from './Hero.module.scss';

const HeroItem = ({ movies, left, right, right1, right2 }) => {
  return (
    <div
      className={styles['hero-wrapper']}
      style={{
        backgroundImage: `${BG_IMAGES.BG}, 
        url(https://image.tmdb.org/t/p/original/${
          movies?.backdrop_path || movies?.poster
        })`,
      }}
      onClick={() => {
        window.location = `/movie/${movies?.id}`;
      }}
    >
      <div
        className={`${left && styles['bg-left-img']}
        ${right1 && styles['bg-right-img-one']} 
        ${right2 && styles['bg-right-img-two']}`}
        style={{
          backgroundImage: `${
            BG_IMAGES.FG
          }, url(https://image.tmdb.org/t/p/original/${
            movies?.backdrop_path || movies?.poster
          })`,
        }}
      >
        <div
          className={`${left && styles['movie-left-wrapper']}
            ${right1 && styles['movie-right-wrapper-one']} 
            ${right2 && styles['movie-right-wrapper-two']}`}
        >
          <div className={styles['rating-badge']}>
            <span>{movies?.vote_average}</span>
          </div>
          <div
            style={{ fontSize: !right ? '50px' : '25px' }}
            className={`${styles.title}`}
          >
            <span>{movies?.original_title}</span>
          </div>
          <div className={`${styles['movie-info']} d-flex align-items-center`}>
            <Genre genre_ids={movies?.genre_ids} />
          </div>
          <div className={styles['release-date']}>
            <span>
              <AiOutlineClockCircle color="var(--navbar-hover)" size="17" />
            </span>
            <span className={styles['date']}>
              {getMoviesMDY(movies?.release_date)}
            </span>
          </div>
          {!right && (
            <div className={`${styles.overview} d-none d-lg-block`}>
              <span>{movies?.overview}</span>
            </div>
          )}

          <div
            className={`${styles['movie-footer']} mt-3 mt-lg-0 d-none d-lg-block`}
          >
            <Link to={`/movie/${movies.id}`}>READ MORE</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
