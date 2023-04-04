import { useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import Aos from 'aos';
import 'aos/dist/aos.css';

import MovieCard from '../Card/MovieCard';
import styles from './SimilarMovies.module.scss';

register();

const SimilarMovies = ({ similars }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div
      className={styles['similar-container']}
      data-aos="fade-up"
      data-aos-once="true"
    >
      <h1>Also check out these movies:</h1>
      <div className="d-none d-xl-block">
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

      <div className=" d-block d-xl-none">
        <div className="row">
          {similars?.slice(0, 4).map((movie) => (
            <div key={movie.id} className="col-12 col-sm-6 col-lg-3">
              <MovieCard {...movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarMovies;
