import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "./Main.module.css";
import Form from "./Form";
import CV from "./CV";

const Main = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [education, setEducation] = useState([
    {
      key: uuidv4(),
      school: "",
      degree: "",
      start: new Date(),
      end: new Date(),
    },
  ]);

  const [experience, setExperience] = useState([
    {
      key: uuidv4(),
      company: "",
      position: "",
      responsibilities: "",
      start: new Date(),
      end:new Date(),
    },
  ]);

  return (
    <main className={styles.main}>
      <Form
        info={info}
        education={education}
        experience={experience}
        setInfo={setInfo}
        setEducation={setEducation}
        setExperience={setExperience}
      />
      <CV info={info} education={education} experience={experience} />
    </main>
  );
};

export default Main;
