import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import moment from 'moment';

import Rating from 'react-rating';
import Genre from '../Genre/Genre';
import styles from './MovieDetail.module.scss';
import { getMoviesMDY } from '../../helpers/timeFunctions';

const MovieDetail = ({ movie }) => {
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
      <div className={`col-12 col-lg-4 ${styles['image-container']}`}>
        <img
          className={styles['poster-size']}
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="movie_img"
        />
      </div>

      <div className={`col-12 col-lg-8 ${styles['info-container']}`}>
        <div className="d-flex justify-content-between align-items-center">
          <h2>{movie.original_title}</h2>
        </div>

        <div className={`${styles['info-sub-container']} row`}>
          <Rating
            readonly
            stop={5}
            initialRating={(movie.vote_average * 10) / 20}
            emptySymbol={<AiOutlineStar color={'lightgray'} size={28} />}
            fullSymbol={<AiFillStar color={'orange'} size={28} />}
            className="col-12 col-lg-6 text-center text-lg-start"
          />

          <div className="col-12 col-lg-6 mt-1 mt-lg-0">
            <Genre genre_ids={movie.genres} iconSize={28} fontSize={20} />
          </div>
        </div>

        <div className={styles['info-overview']}>
          <p>{movie.overview}</p>
        </div>

        <div className="w-100">
          <p
            className="d-flex justify-content-between"
            style={{ width: '350px', fontSize: '20px' }}
          >
            <span className="fw-bold">Release Date: </span>
            <span>{getMoviesMDY(movie.release_date)}</span>
          </p>

          <p
            className="d-flex justify-content-between"
            style={{ width: '350px', fontSize: '20px' }}
          >
            <span className="fw-bold">IMDB: </span>
            <span>{Math.round(movie.vote_average * 10) / 10}</span>
          </p>

          <p
            className="d-flex justify-content-between"
            style={{ width: '350px', fontSize: '20px' }}
          >
            <span className="fw-bold">Duration: </span>{' '}
            <span>
              {moment.duration(movie.runtime, 'minutes').hours()}h{' '}
              {moment.duration(movie.runtime, 'minutes').minutes()}m
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
