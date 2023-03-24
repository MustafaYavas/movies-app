import { useEffect, useState } from 'react';
import { AiOutlineTag } from 'react-icons/ai';

import { GENRES } from '../../helpers/constants';
import styles from './Genre.module.scss';

const Genre = ({ genre_ids }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    if (genre_ids?.length > 2) {
      setGenres(genre_ids.slice(0, 2));
    } else {
      setGenres(genre_ids);
    }
  }, [genre_ids]);

  return (
    <div className={styles.genres}>
      <span>
        <AiOutlineTag color="var(--navbar-hover)" size="17" />
      </span>
      {genres?.map((genre) => (
        <p key={genre} className={styles.genre}>
          {GENRES[genre]}
        </p>
      ))}
    </div>
  );
};

export default Genre;
