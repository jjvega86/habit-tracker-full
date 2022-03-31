export const parseCategories = (categories) => {
  let parsedCategories = [];
  for (let category in categories) {
    parseCategories.push({ name: category });
  }
  return parsedCategories;
};
