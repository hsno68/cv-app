import { useState } from "react";
import { initialFormData } from "./config.js";
import FormSections from "./FormSections.jsx";

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
        <FormSections formData={formData} onChange={handleChange} />
      </form>
    </>
  );
}
