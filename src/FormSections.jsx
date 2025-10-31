import { sections } from "./config.js";
import Section from "./Section.jsx";

export default function FormSections({ formData, onChange }) {
  return sections.map(({ heading, controls }) => (
    <Section
      key={heading}
      heading={heading}
      formControls={controls}
      formData={formData}
      onChange={onChange}
    />
  ));
}
