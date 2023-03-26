import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import moment from 'moment';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Rating from 'react-rating';
import Genre from '../Genre/Genre';
import styles from './MovieDetail.module.scss';
import { getMoviesMDY } from '../../helpers/timeFunctions';
import { useEffect } from 'react';

const MovieDetail = ({ movie }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div
      className={`${styles['movie-detail-container']} row`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(8, 27, 39, .5), rgba(8, 27, 39, 1)), 
        url(https://image.tmdb.org/t/p/original/${
          movie.backdrop_path || movie.poster
        })`,
      }}
    >
      <div
        className={`col-12 col-lg-4 ${styles['image-container']}`}
        data-aos="slide-right"
      >
        <img
          className={styles['poster-size']}
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="movie_img"
        />
      </div>

      <div
        className={`col-12 col-lg-8 ${styles['info-container']}`}
        data-aos="slide-left"
      >
        <div className="d-flex justify-content-between align-items-center">
          <h2>{movie.original_title}</h2>
        </div>

        <div className={`${styles['info-sub-container']} row w-100`}>
          <Rating
            readonly
            stop={5}
            initialRating={(movie.vote_average * 10) / 20}
            emptySymbol={<AiOutlineStar color={'lightgray'} size={24} />}
            fullSymbol={<AiFillStar color={'orange'} size={24} />}
            className="col-12 col-lg-3 text-center text-lg-start"
          />

          <div className="col-12 col-lg-9 mt-1 mt-lg-0">
            <Genre genre_ids={movie.genres} iconSize={24} fontSize={18} />
          </div>
        </div>

        <div className={styles['info-overview']}>
          <p>{movie.overview}</p>
        </div>

        <div className="w-100 row">
          <div className="col-12 row">
            <p className="fw-bold col-6 col-lg-4 p-0 ps-lg-3">Release Date: </p>
            <p className="col-6">{getMoviesMDY(movie.release_date)}</p>
          </div>

          <div className="col-12 row">
            <p className="fw-bold col-6 col-lg-4 p-0 ps-lg-3">IMDB: </p>
            <p className="col-6">{Math.round(movie.vote_average * 10) / 10}</p>
          </div>

          <div className="col-12 row">
            <p className="fw-bold col-6 col-lg-4 p-0 ps-lg-3">Duration: </p>
            <p className="col-6">
              {moment.duration(movie.runtime, 'minutes').hours()}h{' '}
              {moment.duration(movie.runtime, 'minutes').minutes()}m
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
