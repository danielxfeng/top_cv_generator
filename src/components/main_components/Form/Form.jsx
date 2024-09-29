import { useEffect } from "react";
import styles from "./Form.module.css";
import { Education, Experience } from "../../../model/model";
import Info from "./Info";
import ListComponent from "./ListComponents";

const Form = ({
  info,
  educations,
  experiences,
  setInfo,
  setEducations,
  setExperiences,
}) => {
  const addNew = (e, tag) => {
    e.preventDefault();
    tag === "education"
      ? setEducations([...educations, Education()])
      : setExperiences([...experiences, Experience()]);
  };

  useEffect(() => {
    if (educations.length === 0) {
      setEducations([Education()]);
    }
  }, [educations]);

  useEffect(() => {
    if (experiences.length === 0) {
      setExperiences([Experience()]);
    }
  }, [experiences]);

  return (
    <div className={styles.form}>
      <h2 className="primary-color">Edit your CV here</h2>
      <Info info={info} setInfo={setInfo} styles={styles} />
      <div className={styles.block}>
        <h3 className="primary-color">Edit Your Educations</h3>
        <ListComponent
          list={educations}
          setList={setEducations}
          tag="education"
          styles={styles}
        />
        <button
          className="a a-no-change"
          onClick={(e) => addNew(e, "education")}
        >
          Add New
        </button>
      </div>
      <div className={styles.block}>
        <h3 className="primary-color">Edit Your Experiences</h3>
        <ListComponent
          list={experiences}
          setList={setExperiences}
          tag="experience"
          styles={styles}
        />
        <button
          className="a a-no-change"
          onClick={(e) => addNew(e, "experience")}
        >
          Add New
        </button>
      </div>
    </div>
  );
};

export default Form;
