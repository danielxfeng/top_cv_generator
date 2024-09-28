import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; 2024{" "}
        <a
          className="a a-no-change a-underline"
          href="https://github.com/danielxfeng/top_cv_generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fancy CV Generator
        </a>
      </p>
      <p>
        created by <em>Daniel</em>
      </p>
    </footer>
  );
};

export default Footer;
