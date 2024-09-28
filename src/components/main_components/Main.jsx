import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Main.module.css";
import Form from "./Form/Form";
import CV from "./CV/CV";

const Main = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [educations, setEducations] = useState([
    {
      key: uuidv4(),
      school: "",
      degree: "",
      start: new Date(),
      end: new Date(),
    },
  ]);

  const [experiences, setExperiences] = useState([
    {
      key: uuidv4(),
      company: "",
      position: "",
      start: new Date(),
      end: new Date(),
      responsibilities: "",
    },
  ]);

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
