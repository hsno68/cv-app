import FormControl from "./FormControl.jsx";

export default function Section({
  heading,
  formControls,
  formData,
  onChange,
  options = null,
}) {
  return (
    <section aria-labelledby={heading}>
      <h2 id={heading}>{heading[0].toUpperCase() + heading.slice(1)}</h2>
      {formControls.map(
        ({ type, label, id, required, ...attributes }, index) => (
          <FormControl
            key={index}
            type={type}
            label={label}
            id={id}
            formData={formData}
            required={required}
            onChange={onChange}
            options={options}
            {...attributes}
          />
        )
      )}
    </section>
  );
}
