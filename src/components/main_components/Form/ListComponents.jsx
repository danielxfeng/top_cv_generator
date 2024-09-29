import { textAttrs, dateAttrs } from "../../../model/model";
import InputComponent from "./InputComponent";

const ListComponent = ({ list, setList, tag, styles }) => {
  const save = (e) => {
    e.preventDefault();
    const obj =
      tag === "education"
        ? {
            school: e.target.school.value,
            degree: e.target.degree.value,
            start: new Date(e.target.start.value),
            end: new Date(e.target.end.value),
          }
        : {
            company: e.target.company.value,
            position: e.target.position.value,
            start: new Date(e.target.start.value),
            end: new Date(e.target.end.value),
            responsibilities: e.target.responsibilities.value,
          };
    obj.key = e.target.getAttribute("data-key");
    const newList = list.filter((item) => item.key !== obj.key);
    setList([...newList, obj]);
  };

  const del = (e) => {
    e.preventDefault();
    const key = e.target.getAttribute("data-key");
    setList(list.filter((item) => item.key !== key));
  };

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <form
          className={styles.item}
          action="/"
          method="post"
          key={item.key}
          data-key={item.key}
          onSubmit={(e) => save(e)}
        >
          <div className={styles.form__head}>
            <button className="a a-no-change" type="submit">
              Save
            </button>
            <button
              className="a a-no-change"
              data-key={item.key}
              onClick={(e) => del(e)}
            >
              Delete
            </button>
          </div>
          <InputComponent
            obj={item}
            itemKey={item.key}
            type="text"
            keys={textAttrs}
            styles={styles}
          />
          <InputComponent
            obj={item}
            itemKey={item.key}
            type="date"
            keys={dateAttrs}
            styles={styles}
          />
          {tag === "experience" && (
            <div className={styles.form__attr}>
              <label htmlFor={`responsibilities-${item.key}`}>
                Responsibilities
              </label>
              <textarea
                id={`responsibilities-${item.key}`}
                name="responsibilities"
                placeholder="Responsibilities"
                autoComplete="responsibilities"
                defaultValue={item.responsibilities}
              />
            </div>
          )}
        </form>
      ))}
    </div>
  );
};

export default ListComponent;
