import { AiOutlineClockCircle } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';

import styles from './SectionTwo.module.scss';
import Genre from '../Genre/Genre';
import { getMoviesMDY } from '../../helpers/timeFunctions';
import { Link } from 'react-router-dom';
import { BG_IMAGES } from '../../helpers/constants';
import { useEffect } from 'react';

const SectionTwo = ({ movie }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div
      className={styles['section-two-container']}
      style={{
        backgroundImage: `${BG_IMAGES.FG}, 
        url(https://image.tmdb.org/t/p/original/${
          movie?.backdrop_path || movie?.poster
        })`,
      }}
      data-aos="zoom-out"
    >
      <div className={`${styles['section-two-info']}`}>
        <div className={styles['rating-badge']}>
          <span>{movie?.vote_average}</span>
        </div>
        <div style={{ fontSize: '50px' }} className={`${styles.title}`}>
          <span>{movie?.original_title}</span>
        </div>
        <div className={`${styles['movie-info']} d-flex align-items-center`}>
          <Genre genre_ids={movie?.genre_ids} />
        </div>
        <div className={styles['release-date']}>
          <span>
            <AiOutlineClockCircle color="var(--navbar-hover)" size="17" />
          </span>
          <span className={styles['date']}>
            {getMoviesMDY(movie?.release_date)}
          </span>
        </div>
        <div className={`${styles.overview} d-none d-lg-block`}>
          <span>{movie?.overview}</span>
        </div>

        <div className={`${styles['movie-footer']} mt-3 mt-lg-0`}>
          <Link to={`/movie/${movie.id}`}>READ MORE</Link>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
