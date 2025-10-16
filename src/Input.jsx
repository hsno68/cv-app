export default function Input({
  type,
  id,
  name,
  required,
  onChange,
  ...attributes
}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      onChange={(e) => onChange(e, name)}
      {...attributes}
    />
  );
}
