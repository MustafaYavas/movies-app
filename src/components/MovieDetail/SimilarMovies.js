import { register } from 'swiper/element/bundle';

import MovieCard from '../Card/MovieCard';
import styles from './SimilarMovies.module.scss';

register();

const SimilarMovies = ({ similars }) => {
  return (
    <div className={styles['similar-container']}>
      <h1>Also check out these movies:</h1>
      <swiper-container
        slides-per-view="4"
        navigation="true"
        pagination="false"
        speed="500"
        loop="true"
        css-mode="true"
      >
        {similars?.map((movie) => (
          <swiper-slide key={movie.id}>
            <MovieCard slide {...movie} />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default SimilarMovies;
