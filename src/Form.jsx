import { useState } from "react";
import { initialFormData, sections } from "./config.js";
import Section from "./Section.jsx";

export default function Form() {
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  return (
    <>
      <p id="form-instructions">An asterisk (*) indicates a required field.</p>
      <form aria-labelledby="form-instructions">
        {sections.map(({ heading, controls }) => (
          <Section
            heading={heading}
            formControls={controls}
            formData={formData}
            onChange={handleChange}
          />
        ))}
      </form>
    </>
  );
}
