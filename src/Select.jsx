import { majors } from "./config.js";

export default function Select({ id, name, value, required, onChange }) {
  return (
    <select
      id={id}
      name={name}
      value={value}
      required={required}
      onChange={onChange}
    >
      <option value="" disabled>
        Select a major
      </option>
      {majors.map((major) => (
        <option key={major} value={major}>
          {major}
        </option>
      ))}
    </select>
  );
}
