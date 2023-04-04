import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import styles from './MovieTrailer.module.scss';

const MovieTrailer = ({ videos }) => {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    videos.forEach((video) => {
      if (video.type === 'Trailer') {
        setTrailer(video);
        return;
      }
    });
  }, [videos]);

  return (
    <div
      className={styles['video-container']}
      data-aos="zoom-in"
      data-aos-once="true"
    >
      <h3>Official trailer of this movie:</h3>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <iframe
          src={`https://www.youtube.com/embed/${trailer?.key}`}
          height="540px"
          width="80%"
          title="trailer"
        />
      </div>
    </div>
  );
};

export default MovieTrailer;
