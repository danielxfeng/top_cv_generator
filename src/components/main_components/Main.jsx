import { useState } from "react";
import styles from "./Main.module.css";
import Form from "./Form/Form";
import CV from "./CV/CV";
import { Education, Experience } from "../../model/model";

const Main = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [educations, setEducations] = useState([Education()]);

  const [experiences, setExperiences] = useState([Experience()]);

  return (
    <main className={styles.main}>
      <Form
        info={info}
        educations={educations}
        experiences={experiences}
        setInfo={setInfo}
        setEducations={setEducations}
        setExperiences={setExperiences}
      />
      <CV info={info} educations={educations} experiences={experiences} />
    </main>
  );
};

export default Main;
