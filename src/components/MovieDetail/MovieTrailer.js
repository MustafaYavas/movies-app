import { useEffect, useState } from 'react';

import styles from './MovieTrailer.module.scss';

const MovieTrailer = ({ videos }) => {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    videos.forEach((video) => {
      if (video.type === 'Trailer') {
        setTrailer(video);
        return;
      }
    });
  }, [videos]);

  return (
    <div className={styles['video-container']}>
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
