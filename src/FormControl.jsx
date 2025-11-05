import { kebabCase } from "./utility.js";
import Input from "./Input.jsx";
import Select from "./Select.jsx";

const inputs = ["text", "tel", "email", "date"];

const inputRenderingTechniques = Object.fromEntries(
  inputs.map((input) => [input, (props) => <Input type={input} {...props} />])
);

const renderingTechniques = {
  ...inputRenderingTechniques,
  select: (props) => <Select {...props} />,
};

export default function FormControl({
  type,
  label,
  id,
  formData,
  required,
  onChange,
}) {
  const kebabId = kebabCase(id);

  const commonProps = {
    id: kebabId,
    name: id,
    value: formData[id],
    required,
    onChange,
  };

  const control = renderingTechniques[type](commonProps);

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
