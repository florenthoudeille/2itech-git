export const mapArray = (array, divName) => {
  array.forEach((el) => {
    return divName.appendChild(el);
  });
};
