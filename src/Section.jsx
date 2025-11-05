import { dateFormatter } from "./utility.js";
import FormControl from "./FormControl.jsx";

export default function Section({
  isEditing,
  heading,
  formControls,
  formData,
  onChange,
}) {
  const sectionHeading = heading[0].toUpperCase() + heading.slice(1);

  return (
    <section aria-labelledby={heading}>
      <h2 id={heading}>{sectionHeading}</h2>
      {isEditing
        ? formControls.map(({ type, label, id, required }) => (
            <FormControl
              key={id}
              type={type}
              label={label}
              id={id}
              formData={formData}
              required={required}
              onChange={onChange}
            />
          ))
        : formControls.map(({ type, label, id }) => (
            <div>
              <h3>{label}</h3>
              <p>
                {type === "date" ? dateFormatter(formData[id]) : formData[id]}
              </p>
            </div>
          ))}
    </section>
  );
}
