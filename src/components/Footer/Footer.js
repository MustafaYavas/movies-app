import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from 'react-icons/ai';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.footer} row`}>
        <div className={`${styles['footer-items']} col-12 col-sm-4`}>
          <small className={`${styles.header} mt-5 mt-md-0`}>Information</small>
          <div>
            <small>Image Licenses</small>
          </div>
          <div>
            <small>Contact Us</small>
          </div>
          <div>
            <small>Our Authors</small>
          </div>
        </div>

        <div className={`${styles['footer-items']} col-12 col-sm-4`}>
          <small className={`${styles.header} mt-5 mt-md-0`}>Discover</small>
          <div>
            <small>Image Licenses</small>
          </div>
          <div>
            <small>Contact Us</small>
          </div>
          <div>
            <small>Our Authors</small>
          </div>
        </div>

        <div className={`${styles['footer-items']} col-12 col-sm-4`}>
          <small className={`${styles.header} mt-5 mt-md-0`}>Community</small>
          <div>
            <small>
              <AiFillFacebook /> Facebook
            </small>
          </div>
          <div>
            <small>
              <AiFillTwitterCircle /> Twitter
            </small>
          </div>
          <div>
            <small>
              <AiFillInstagram /> Intagram
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
