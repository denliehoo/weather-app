export const capitalizeFirstOnly = (str) => {
  if (typeof str !== "string") {
    return str; // Return the input as is if it's not a string
  }

  if (str.length === 0) {
    return str; // Return empty string as is
  }

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
