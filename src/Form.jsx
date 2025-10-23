import { useState } from "react";
import { contactControls, majors } from "./props.js";
import Section from "./Section.jsx";

export default function Form() {
  const [formData, setFormData] = useState(
    contactControls.reduce((formDataObject, { id }) => {
      formDataObject[id] = "";
      return formDataObject;
    }, {})
  );

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
      </form>
    </>
  );
}
