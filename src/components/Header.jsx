import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      logoRef.current && logoRef.current.classList.add(styles.animation);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={styles.header}>
      <div ref={logoRef} className={styles.header__logo}>
        <Link className="a a-no-change" to="/">
          <h1 className="primary-color">Fancy CV Generator</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
