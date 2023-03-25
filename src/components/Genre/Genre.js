import { useEffect, useState } from 'react';
import { AiOutlineTag } from 'react-icons/ai';

import { GENRES } from '../../helpers/constants';
import styles from './Genre.module.scss';

const Genre = ({ genre_ids, iconSize, fontSize }) => {
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
        <AiOutlineTag
          color="var(--navbar-hover)"
          size={iconSize ? iconSize : '17'}
        />
      </span>
      {genres?.map((genre) => (
        <p
          key={genre?.id ? genre.id : genre}
          className={styles.genre}
          style={{ fontSize: fontSize ? fontSize : '12px' }}
        >
          {GENRES[genre?.id ? genre.id : genre]}
        </p>
      ))}
    </div>
  );
};

export default Genre;
