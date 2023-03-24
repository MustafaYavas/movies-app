import MovieCard from '../MovieCard/MovieCard';
import styles from './SectionThree.module.scss';

const SectionThree = ({ movies }) => {
  return (
    <div className="row mb-5">
      <h1 className={styles['section-three-title']}>New Releases</h1>
      <h4 className={styles['section-three-subtitle']}>
        Most recently released movies.
      </h4>
      <div className="col-12 col-xl-4 position-relative">
        <MovieCard {...movies[0]} full />
      </div>
      <div className="col-12 col-md-6 col-xl-4 position-relative">
        <MovieCard {...movies[1]} half />
        <div className="mt-5 position-relative">
          <MovieCard {...movies[2]} half />
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-4 position-relative">
        <MovieCard {...movies[3]} half />
        <div className="mt-5 position-relative">
          <MovieCard {...movies[4]} half />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
