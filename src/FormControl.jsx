import { kebabCase } from "./utility.js";
import Input from "./Input.jsx";
import Select from "./Select.jsx";

export default function FormControl({
  type,
  label,
  id,
  required = false,
  options = null,
  onChange,
  ...attributes
} = {}) {
  const kebabId = kebabCase(id);

  const commonProps = {
    id: kebabId,
    name: id,
    required,
    onChange,
    ...attributes,
  };

  const renderingTechniques = {
    input: () => <Input type={type} {...commonProps} />,
    select: () => <Select options={options} {...commonProps} />,
  };

  const control = renderingTechniques[type]?.();

  return (
    <div className="form-control-container">
      <label htmlFor={kebabId}>
        <span aria-hidden="true">{required && "*"}</span>
        {label}
      </label>
      {control}
    </div>
  );
}
