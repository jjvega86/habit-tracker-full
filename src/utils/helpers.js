export const parseCategories = (categories) => {
  let parsedCategories = [];
  categories.forEach((category) => {
    parsedCategories.push({ name: category.value });
  });
  return parsedCategories;
};

export const formatHabitData = (habitText, selectedCategories) => {
  let categories = parseCategories(selectedCategories);
  return { habit_text: habitText, categories };
};
