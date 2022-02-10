export const get = () => {
  return JSON.parse(localStorage.getItem("habits"));
};

export const add = (data) => {
  let currentHabits = get() === null ? [] : get();
  console.log(currentHabits);
  let newHabit = {
    id: currentHabits.length + 1,
    text: data,
    streak: 0,
  };
  localStorage.setItem("habits", JSON.stringify([...currentHabits, newHabit]));
  return newHabit;
};
