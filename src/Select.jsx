import { majors } from "./props.js";

export default function Select({ id, name, value, required, onChange }) {
  return (
    <>
      <select
        id={id}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
      >
        {majors.map((major) => (
          <option key={major} value={major}>
            {major}
          </option>
        ))}
      </select>
      <span className="material-symbols-rounded" aria-hidden="true">
        arrow_drop_down
      </span>
    </>
  );
}
