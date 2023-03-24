import styles from './Hero.module.scss';
import HeroItem from './HeroItem';

const Hero = ({ heroMovies }) => {
  return (
    <div className={`${styles['container-wrapper']}`}>
      <div className="row">
        <div className="col-12 col-md-8 p-0" style={{ cursor: 'pointer' }}>
          <HeroItem left movies={heroMovies[0]} />
        </div>

        <div
          className="col-12 col-md-4 p-0 d-none d-md-block"
          style={{ cursor: 'pointer' }}
        >
          <HeroItem right right1 movies={heroMovies[1]} />
          <HeroItem right right2 movies={heroMovies[2]} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
