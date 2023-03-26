import styles from './Navbar.module.scss';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const changeActiveTabColor = (data) => {
    return data.isActive ? styles['active-tab'] : '';
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        height: showMenu ? '0' : '72px',
        backgroundColor: isScrolled ? 'var(--bg-color-soft)' : 'transparent',
        transition: '.5s ease-in-out',
      }}
    >
      {!showMenu && (
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <NavLink to="/">
              <img src={logo} alt="logo" />
              MoBees
            </NavLink>
          </div>

          <div className={`${styles['navbar-links']} d-none d-sm-flex`}>
            <NavLink
              className={(data) => changeActiveTabColor(data)}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={(data) => changeActiveTabColor(data)}
              to="/contact"
            >
              Contact
            </NavLink>
          </div>

          <div
            onClick={() => setShowMenu(true)}
            className={`${styles['navbar-menu']} d-block d-sm-none`}
            style={{ cursor: 'pointer' }}
          >
            <GiHamburgerMenu />
          </div>
        </div>
      )}

      <Modal
        show={showMenu}
        fullscreen={fullscreen}
        onHide={() => setShowMenu(false)}
        animation={false}
        style={{ backgroundColor: '#0c2738' }}
      >
        <div
          className={`${styles['modal-close-button']} d-flex justify-content-end`}
          onClick={() => setShowMenu(false)}
        >
          <AiOutlineClose />
        </div>
        <Modal.Body>
          <div className={`${styles['modal-items']}`}>
            <NavLink
              className={(data) => changeActiveTabColor(data)}
              to="/"
              onClick={() => setShowMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              className={(data) => changeActiveTabColor(data)}
              to="/about"
              onClick={() => setShowMenu(false)}
            >
              About
            </NavLink>
            <NavLink
              className={(data) => changeActiveTabColor(data)}
              to="/contact"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </NavLink>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Navbar;
