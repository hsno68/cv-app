import { sections } from "./config.js";
import Section from "./Section.jsx";

export default function Form({ formData, onChange }) {
  return (
    <>
      <p id="form-instructions">An asterisk (*) indicates a required field.</p>
      <form aria-labelledby="form-instructions">
        {sections.map(({ heading, controls }) => (
          <Section
            key={heading}
            heading={heading}
            formControls={controls}
            formData={formData}
            onChange={onChange}
          />
        ))}
      </form>
    </>
  );
}
