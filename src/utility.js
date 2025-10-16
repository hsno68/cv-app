export function kebabCase(str = "") {
  return [...str].reduce((result, char) => {
    const newChar =
      char === char.toUpperCase() ? `-${char.toLowerCase()}` : char;
    return result + newChar;
  }, "");
}
