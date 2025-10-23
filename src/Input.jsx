export default function Input({
  type,
  id,
  name,
  value,
  required,
  onChange,
  ...attributes
}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      required={required}
      onChange={onChange}
      {...attributes}
    />
  );
}
