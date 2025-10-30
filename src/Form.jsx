import { useState } from "react";
import {
  contactControls,
  educationControls,
  experienceControls,
} from "./props.js";
import Section from "./Section.jsx";

const initialFormData = [
  ...contactControls,
  ...educationControls,
  ...experienceControls,
].reduce((formData, { id }) => {
  formData[id] = "";
  return formData;
}, {});

const sections = [
  { heading: "contact", controls: contactControls },
  { heading: "education", controls: educationControls },
  { heading: "experience", controls: experienceControls },
];

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
