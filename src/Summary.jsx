import { sections } from "./config.js";
import Section from "./Section.jsx";

export default function Summary({ isEditing, formData }) {
  return (
    <>
      <h1>Summary</h1>
      {sections.map(({ heading, controls }) => (
        <Section
          isEditing={isEditing}
          key={heading}
          heading={heading}
          formControls={controls}
          formData={formData}
        />
      ))}
    </>
  );
}
