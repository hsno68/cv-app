import { useState } from "react";
import { personalInfoControls } from "./props.js";
import FormControl from "./FormControl.jsx";

export default function Form() {
  const [formData, setFormData] = useState(
    personalInfoControls.reduce((formDataObject, { id }) => {
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
        <div aria-labelledby="personal-info-heading">
          <h2 id="personal-info-heading">Personal Information</h2>
          {personalInfoControls.map(
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
