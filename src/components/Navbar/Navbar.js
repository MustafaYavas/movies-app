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
  const changeActiveTabColor = (data) => {
    return data.isActive ? styles['active-tab'] : '';
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <NavLink className={(data) => changeActiveTabColor(data)} to="/">
            MoBees
          </NavLink>
        </div>

        <div className={`${styles['navbar-links']} d-none d-sm-flex`}>
          <NavLink className={(data) => changeActiveTabColor(data)} to="/about">
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
          <div
            className={`${styles['modal-items']}`}
            onClick={() => setShowMenu(false)}
          >
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
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Navbar;
