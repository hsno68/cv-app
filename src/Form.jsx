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
        <Section
          heading="contact"
          formControls={contactControls}
          formData={formData}
          onChange={handleChange}
        />
        <Section
          heading="education"
          formControls={educationControls}
          formData={formData}
          onChange={handleChange}
        />
        <Section
          heading="experience"
          formControls={experienceControls}
          formData={formData}
          onChange={handleChange}
        />
      </form>
    </>
  );
}
