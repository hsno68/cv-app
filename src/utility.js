export function kebabCase(str = "") {
  return [...str].reduce((result, char) => {
    const newChar =
      char === char.toUpperCase() ? `-${char.toLowerCase()}` : char;
    return result + newChar;
  }, "");
}

export function dateFormatter(date) {
  if (!date) {
    return "N/A";
  }

  const parsedDate = new Date(date + "T00:00:00");
  return parsedDate.toLocaleDateString("en-US", {
    month: "2-digit", // e.g., Jun
    day: "2-digit", // e.g., 09
    year: "numeric", // e.g., 2025
  });
}
