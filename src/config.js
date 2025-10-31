const contactControls = [
  { type: "text", label: "First Name", id: "firstName", required: true },
  { type: "text", label: "Last Name", id: "lastName", required: true },
  { type: "email", label: "Email", id: "email", required: true },
  { type: "tel", label: "Phone", id: "phone", required: false },
];

const experienceControls = [
  { type: "text", label: "Company", id: "company", required: true },
  { type: "text", label: "Position", id: "position", required: true },
  { type: "text", label: "Responsibilities", id: "duties", required: false },
  { type: "date", label: "Start Date", id: "startDate", required: true },
  { type: "date", label: "End Date", id: "endDate", required: false },
];

const educationControls = [
  { type: "text", label: "School", id: "school", required: true },
  { type: "select", label: "Major", id: "major", required: false },
  { type: "date", label: "Graduation", id: "graduation", required: true },
];

// For Form.jsx
export const initialFormData = [
  ...contactControls,
  ...experienceControls,
  ...educationControls,
].reduce((formData, { id }) => {
  formData[id] = "";
  return formData;
}, {});

export const sections = [
  { heading: "contact", controls: contactControls },
  { heading: "education", controls: educationControls },
  { heading: "experience", controls: experienceControls },
];

// For Select.jsx
export const majors = [
  "Accounting",
  "Advertising",
  "Agriculture",
  "Anthropology",
  "Architecture",
  "Art History",
  "Biology",
  "Biomedical Engineering",
  "Business Administration",
  "Chemistry",
  "Civil Engineering",
  "Communication",
  "Computer Engineering",
  "Computer Science",
  "Criminal Justice",
  "Data Science",
  "Design",
  "Economics",
  "Education",
  "Electrical Engineering",
  "English",
  "Environmental Science",
  "Finance",
  "Graphic Design",
  "Health Sciences",
  "History",
  "Hospitality Management",
  "Human Resources",
  "Industrial Engineering",
  "Information Technology",
  "International Relations",
  "Journalism",
  "Law",
  "Management",
  "Marketing",
  "Mathematics",
  "Mechanical Engineering",
  "Medicine",
  "Music",
  "Nursing",
  "Philosophy",
  "Physics",
  "Political Science",
  "Psychology",
  "Public Health",
  "Sociology",
  "Software Engineering",
  "Theater",
  "Visual Arts",
];
