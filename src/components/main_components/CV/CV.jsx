import styles from "./CV.module.css";

const ListComponent = ({ list, tag, tagItem }) => {
  return (
    <div className={tag}>
      {list.map((item) => (
        <div className={tagItem} key={item.key}>
          {Object.keys(item).map((key) => {
            return key === "key" ? null : (
              <p className={styles.item} key={`${item.key}-${key}`}>
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
    </div>
  );
};

const CV = ({ info, educations, experiences }) => {
  return (
    <div className={`${styles.cv} primary-color`}>
      <div className={styles.frame}>
        <h2>Preview your CV</h2>
        <div className={styles.info}>
          <h3>Personal Information</h3>
          <div className={styles.info__item}>
            {Object.keys(info).map((key) => (
              <p className={styles.item} key={key}>
                <span className={styles.label}>{key}:</span>
                <span className={styles.value}>{info[key]}</span>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.educations}>
          <h3>Educations</h3>
          <div className={styles.education__items}>
            <ListComponent
              list={educations}
              tag={styles.education}
              tagItem={styles.education__item}
            />
          </div>
        </div>
        <div className={styles.experiences}>
          <h3>Experiences</h3>
          <div className={styles.experience__items}>
            <ListComponent
              list={experiences}
              tag={styles.experience}
              tagItem={styles.experience__item}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
