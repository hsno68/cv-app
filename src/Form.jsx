import { useState } from "react";
import { contactControls } from "./props.js";
import FormControl from "./FormControl.jsx";

export default function Form() {
  const [formData, setFormData] = useState(
    contactControls.reduce((formDataObject, { id }) => {
      formDataObject[id] = "";
      return formDataObject;
    }, {})
  );

  function handleChange(e, id) {
    setFormData({ ...formData, [id]: e.target.value });
  }

  return (
    <>
      <p id="form-instructions">An asterisk (*) indicates a required field.</p>
      <form aria-labelledby="form-instructions">
        <div aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact</h2>
          {contactControls.map(
            ({ type, label, id, required, ...attributes }, index) => (
              <FormControl
                key={index}
                type={type}
                label={label}
                id={id}
                required={required}
                onChange={handleChange}
                {...attributes}
              />
            )
          )}
        </div>
      </form>
    </>
  );
}
