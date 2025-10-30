import FormControl from "./FormControl.jsx";

export default function Section({
  heading,
  formControls,
  formData,
  onChange,
  options = null,
}) {
  const sectionHeading = heading[0].toUpperCase() + heading.slice(1);

  return (
    <section aria-labelledby={heading}>
      <h2 id={heading}>{sectionHeading}</h2>
      {formControls.map(({ type, label, id, required }, index) => (
        <FormControl
          key={index}
          type={type}
          label={label}
          id={id}
          formData={formData}
          required={required}
          onChange={onChange}
          options={options}
        />
      ))}
    </section>
  );
}
