import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={styles.wrapper}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
