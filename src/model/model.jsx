import { v4 as uuidv4 } from "uuid";

const Education = () => {
  return {
    key: uuidv4(),
    school: "",
    degree: "",
    start: new Date(),
    end: new Date(),
  };
};

const Experience = () => {
  return {
    key: uuidv4(),
    company: "",
    position: "",
    start: new Date(),
    end: new Date(),
    responsibilities: "",
  };
};

export { Education, Experience };
