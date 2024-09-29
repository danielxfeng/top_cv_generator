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

const textAttrs = ["school", "degree", "company", "position"];
const dateAttrs = ["start", "end"];
const textAreaAttrs = ["responsibilities"];

export { Education, Experience, textAttrs, dateAttrs, textAreaAttrs };
