import Button from '../Button/Button';
import styles from './PersonCard.module.scss';

const PersonCard = ({ className, image, name }) => {
  return (
    <div className={`${styles['person-card-container']} ${className}`}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={`${styles['person-img']}`}
      >
        <p className={styles['person-name']}>{name}</p>
      </div>
      <p className={styles['person-info']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <Button className={`${styles['person-btn']}`} child={'VIEW'} />
    </div>
  );
};

export default PersonCard;
