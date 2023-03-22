import { useEffect, useState } from 'react';

import { getPopularMovies } from '../../helpers/movieFunctions';
import styles from './Hero.module.scss';
import HeroItem from './HeroItem';

const Hero = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const datas = await getPopularMovies();
      setMovies(datas);
    };
    getMovies();
  }, []);

  return (
    <div className={`${styles['container-wrapper']}`}>
      {movies.length > 0 && (
        <div className="row">
          <div
            className="col-12 col-md-8 p-0"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.location = `/movie/${movies[3]?.id}`;
            }}
          >
            <HeroItem left movies={movies[3]} />
          </div>

          <div
            className="col-12 col-md-4 p-0 d-none d-md-block"
            style={{ cursor: 'pointer' }}
          >
            <HeroItem right right1 movies={movies[1]} />
            <HeroItem right right2 movies={movies[5]} />
          </div>
          {/* <RightSide movies={movies} /> */}
        </div>
      )}
    </div>
  );
};

export default Hero;
