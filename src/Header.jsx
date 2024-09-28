import { Link } from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className="a-no-change" to="/">
        <h1 className="primary-color">Fancy CV Generator</h1>
      </Link>
    </header>
  );
};

export default Header;
