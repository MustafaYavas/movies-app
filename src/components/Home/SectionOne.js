import { useEffect, useState, useTransition } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';

import styles from './SectionOne.module.scss';
import MovieCard from '../Card/MovieCard';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const SectionOne = ({ movies }) => {
  const [type, setType] = useState('cult');
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [isSlideChange, setIsSlideChange] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    let newMovies = [];
    if (type === 'cult') newMovies = movies?.cultMovies;
    else if (type === 'forYou') newMovies = movies?.recomMovies;
    else newMovies = movies?.newMovies;
    startTransition(() => {
      setSelectedMovies(newMovies);
    });
  }, [type, movies]);

  const handleChangeTab = (tab) => {
    setType(tab);
    startTransition(() => {
      let newMovies = [];
      if (type === 'cult') newMovies = movies?.cultMovies;
      else if (type === 'forYou') newMovies = movies?.recomMovies;
      else newMovies = movies?.newMovies;
      setSelectedMovies(newMovies);
    });
  };

  return (
    <div
      className={styles['section-one-container']}
      data-aos="slide-left"
      data-aos-once="true"
    >
      <div className={`${styles['section-title-wrapper']} row`}>
        <div
          className={`${styles['title-left']} col-12 col-lg-6 text-center text-lg-start`}
        >
          <h1 className={styles['section-title']}>Hihglights today</h1>
          <div className={styles['section-subtitle']}>
            Be sure not to miss these movies.
          </div>
        </div>

        <div
          className={`${styles['title-right']} col-12 col-lg-6 text-center text-lg-end mt-5 mt-lg-0`}
        >
          <button
            onClick={() => {
              handleChangeTab('cult');
            }}
            className={type === 'cult' ? `${styles.active}` : ''}
          >
            Cult movies
          </button>
          <button
            onClick={() => {
              handleChangeTab('forYou');
            }}
            className={type === 'forYou' ? `${styles.active}` : ''}
          >
            Just for you
          </button>
          <button
            onClick={() => {
              handleChangeTab('new');
            }}
            className={type === 'new' ? `${styles.active}` : ''}
          >
            New
          </button>
        </div>
      </div>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        onSlideChangeTransitionStart={() => setIsSlideChange(false)}
        onSlideChangeTransitionEnd={() => setIsSlideChange(true)}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={`${styles['movie-tabs']}`}
      >
        {selectedMovies?.length > 0 &&
          selectedMovies?.map((movie) => (
            <SwiperSlide key={movie}>
              <div className="d-flex justify-content-center align-items-center">
                <MovieCard slide {...movie} />

                <p className="w-25 ms-5 mt-1 fst-italic d-none d-md-block">
                  {isSlideChange &&
                    (isPending ? null : (
                      <TypeAnimation
                        sequence={[movie.overview, 10000]}
                        speed={50}
                      />
                    ))}
                </p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SectionOne;
