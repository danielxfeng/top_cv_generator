import styles from "./Form.module.css";
import { Education, Experience } from "../../../model/model";

const Info = ({ info, setInfo }) => {
  const submitInfo = (e) => {
    e.preventDefault();
    setInfo({
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
    });
  };

  return (
    <div className={styles.block}>
      <form
        className={styles.form}
        action="/"
        method="post"
        onSubmit={(e) => submitInfo(e)}
      >
        <div className={styles.form__head}>
          <h3 className="primary-color">Edit Your Personal Information</h3>
          <button className="a a-no-change" type="submit">
            Save
          </button>
        </div>
        <div className={styles.form__item}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="name"
            defaultValue={info.name}
          />
        </div>
        <div className={styles.form__item}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            defaultValue={info.email}
          />
        </div>
        <div className={styles.form__item}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Phone"
            autoComplete="tel"
            defaultValue={info.phone}
          />
        </div>
        <div className={styles.form__item}>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            name="address"
            placeholder="Address"
            autoComplete="address"
            defaultValue={info.address}
          />
        </div>
      </form>
    </div>
  );
};

const ListComponent = ({ list, setList, tag }) => {
  const add = () => {
    save();
    setList([...list, tag === "education" ? Education() : Experience()]);
  };

  const save = () => {
    return (<></>);
  };

  const load = () => {
    return (<></>);
  };

  return list.length === 0 ? add() : load();
}

const Form = ({
  info,
  educations,
  experiences,
  setInfo,
  setEducations,
  setExperiences,
}) => {
  return (
    <div className={styles.form}>
      <h2 className="primary-color">Edit your CV here</h2>
      <Info info={info} setInfo={setInfo} />
      <ListComponent list={educations} setList={setEducations} tag="education" />
      <ListComponent list={experiences} setList={setExperiences} tag="experience" />
    </div>
  );
};

export default Form;
