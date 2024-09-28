import styles from './Main.module.css';
import Form from './Form';
import CV from './CV';

const Main = () => {
  return (
    <main className={styles.main}>
      <Form />
      <CV />
    </main>
  );
};

export default Main;
