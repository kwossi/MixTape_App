export const decodeHTML = (input) => {
  return new DOMParser().parseFromString(input, "text/html").documentElement
    .textContent;
};
