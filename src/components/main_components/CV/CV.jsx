import styles from "./CV.module.css";

const ListComponent = ({ list }) => {
  return (
    <>
      {list.map((item) => (
        <div className={styles.item} key={item.key}>
          {Object.keys(item).map((key) => {
            return key === "key" ? null : (
              <p className={styles.attr} key={`${item.key}-${key}`}>
                <span className={styles.label}>{key}:</span>
                <span className={styles.value}>
                  {item[key] instanceof Date
                    ? item[key].toLocaleDateString()
                    : item[key]}
                </span>
              </p>
            );
          })}
        </div>
      ))}
    </>
  );
};

const CV = ({ info, educations, experiences }) => {
  return (
    <div className={`${styles.cv} primary-color`}>
      <div className={styles.frame}>
        <h2>Preview your CV</h2>
        <div className={styles.block}>
          <h3>Personal Information</h3>
          <div className={styles.item}>
            {Object.keys(info).map((key) => (
              <p className={styles.attr} key={key}>
                <span className={styles.label}>{key}:</span>
                <span className={styles.value}>{info[key]}</span>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.block}>
          <h3>Educations</h3>
          <div className={styles.items}>
            <ListComponent list={educations} />
          </div>
        </div>
        <div className={styles.block}>
          <h3>Experiences</h3>
          <div className={styles.items}>
            <ListComponent list={experiences} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
