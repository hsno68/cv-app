import { kebabCase } from "./utility.js";
import Input from "./Input.jsx";

export default function FormControl({ type, label, id, required = false, onChange, ...attributes } = {}) {
  const kebabId = kebabCase(id);

  return (
    <div className="form-control-container">
      <label htmlFor={kebabId}>
        <span aria-hidden="true">{required && "*"}</span>
        {label}
      </label>
      <Input
        type={type}
        id={kebabId}
        name={id}
        required={required}
        onChange={onChange}
        {...attributes}
      />
    </div>
  );
}
