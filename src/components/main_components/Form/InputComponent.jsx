import { textAttrs } from "../../../model/model";

const titleSytle = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const InputComponent = ({ obj, itemKey, type, keys, styles }) => {
  const items = Object.entries(obj).filter(([key]) => keys.includes(key));

  return (
    <>
      {items.map(([attrKey, value]) => (
        <div className={styles.form__attr} key={`${attrKey}-${itemKey}`}>
          <label htmlFor={`${attrKey}-${itemKey}`}>{attrKey}</label>
          <input
            id={`${attrKey}-${itemKey}`}
            type={type}
            name={attrKey}
            placeholder={titleSytle(attrKey)}
            autoComplete={attrKey}
            defaultValue={
              keys === textAttrs ? value : value.toISOString().split("T")[0]
            }
            required
          />
        </div>
      ))}
    </>
  );
};

export default InputComponent;
