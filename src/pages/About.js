import styles from './About.module.scss';
import about from '../assets/about.jpg';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import PersonCard from '../components/Card/PersonCard';

const About = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `${`linear-gradient(to bottom, rgba(8, 27, 39, .1), rgba(8, 27, 39, 1))`}, 
        url(${about})`,
        }}
        className={styles['about-wrapper']}
      >
        <div className={styles['about-title']}>About Us</div>

        <p className={styles['about-paragraph']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      <div className="row text-center">
        <p className={`${styles['about-subtitle']} d-none d-lg-block`}>
          OUR TEAM
        </p>
        <PersonCard
          className="col-12 col-lg-4 mt-4"
          image={p1}
          name="John Doe"
        />
        <PersonCard
          className="col-12 col-lg-4 mt-4"
          image={p2}
          name="Jane Doe"
        />
        <PersonCard
          className="col-12 col-lg-4 mt-4"
          image={p3}
          name="John Doe"
        />
      </div>
    </>
  );
};

export default About;
