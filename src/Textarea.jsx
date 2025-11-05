export default function Textarea({ id, name, value, required, onChange }) {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      required={required}
      onChange={onChange}
    >
      {value}
    </textarea>
  );
}
