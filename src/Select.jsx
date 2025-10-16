export default function Select({
  id,
  name,
  required,
  options,
  onChange,
  ...attributes
}) {
  return (
    <>
      <select
        id={id}
        name={name}
        required={required}
        onChange={(e) => onChange(e, name)}
        {...attributes}
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
