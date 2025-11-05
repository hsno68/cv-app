import { useState } from "react";
import { initialFormData } from "./config.js";
import Form from "./Form.jsx";
import Summary from "./Summary.jsx";

export default function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function handleClick(e) {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  }

  return (
    <div className="app">
      {isEditing ? (
        <Form
          isEditing={isEditing}
          formData={formData}
          onChange={handleChange}
        />
      ) : (
        <Summary isEditing={isEditing} formData={formData} />
      )}
      <button type="button" onClick={handleClick}>
        {isEditing ? "Submit" : "Edit"}
      </button>
    </div>
  );
}
