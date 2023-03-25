import Rating from 'react-rating';
import { AiOutlineStar, AiFillStar, AiOutlineTag } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import styles from './MovieCard.module.scss';
import Genre from '../Genre/Genre';

const MovieCard = ({ slide, half, full, ...props }) => {
  const {
    id,
    poster_path,
    backdrop_path,
    original_title,
    vote_average,
    genre_ids,
  } = props;

  return (
    <div className={`${styles['card-wrapper']}`}>
      <div className={styles['card-header']} style={{ position: 'relative' }}>
        <div className={styles['rating-badge']}>
          <p
            style={{
              top: slide ? '0' : '-13px',
            }}
          >
            {Math.round(vote_average * 10) / 10}
          </p>
        </div>
        <img
          onClick={(e) => {
            window.location = `/movie/${id}`;
          }}
          className={styles['card-img']}
          style={{
            width: full ? '360px' : half ? '320px' : '250px',
          }}
          src={`https://image.tmdb.org/t/p/original/${
            half ? backdrop_path : poster_path
          }`}
          alt="card"
        />
      </div>
      <div className={styles['card-info']}>
        <Rating
          readonly
          stop={5}
          initialRating={Math.round(vote_average * 10) / 20}
          emptySymbol={<AiOutlineStar color={'lightgray'} size={21} />}
          fullSymbol={<AiFillStar color={'orange'} size={21} />}
        />

        <Link
          to={`/movie/${id}`}
          style={{
            fontSize: full ? '30px' : '23px',
            width: full ? '360px' : half ? '320px' : '250px',
          }}
          className="text-truncate"
        >
          {original_title}
        </Link>

        <Genre genre_ids={genre_ids} />
      </div>
    </div>
  );
};

export default MovieCard;
