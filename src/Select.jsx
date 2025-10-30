export default function Select({
  id,
  name,
  value,
  required,
  onChange,
  options,
}) {
  return (
    <>
      <select
        id={id}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span class="material-symbols-rounded" aria-hidden="true">
        arrow_drop_down
      </span>
    </>
  );
}
