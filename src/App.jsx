import { useState } from "react";
import { initialFormData } from "./config.js";
import Form from "./Form.jsx";

export default function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  return (
    <div className="app">
      <Form formData={formData} onChange={handleChange} />
    </div>
  );
}
