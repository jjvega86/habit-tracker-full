export const getData = () => {
  return JSON.parse(localStorage.getItem("habits"));
};

export const addData = (habit) => {
  let currentHabits = getData() === null ? [] : getData();
  let newHabit = {
    id: currentHabits.length + 1,
    text: habit,
    streak: 0,
  };
  localStorage.setItem("habits", JSON.stringify([...currentHabits, newHabit]));
  return newHabit;
};

export const increaseData = (habitId) => {
  let currentHabits = getData() === null ? [] : getData();
  let updatedHabits = currentHabits.map((habit) => {
    if (habit.id === habitId) {
      return { ...habit, streak: habit.streak + 1 };
    } else {
      return habit;
    }
  });
  localStorage.removeItem("habits");
  localStorage.setItem("habits", JSON.stringify(updatedHabits));
  return updatedHabits;
};

export const resetData = (habitId) => {
  let currentHabits = getData() === null ? [] : getData();
  let updatedHabits = currentHabits.map((habit) => {
    if (habit.id === habitId) {
      return { ...habit, streak: 0 };
    } else {
      return habit;
    }
  });
  localStorage.removeItem("habits");
  localStorage.setItem("habits", JSON.stringify(updatedHabits));
  return updatedHabits;
};

export const deleteData = (habitId) => {
  let currentHabits = getData() === null ? [] : getData();
  let filteredHabits = currentHabits.filter((habit) => habit.id !== habitId);
  let finalHabits = resetIds(filteredHabits);
  localStorage.removeItem("habits");
  localStorage.setItem("habits", JSON.stringify(finalHabits));
  return filteredHabits;
};

const resetIds = (habits) => {
  let counter = 1;
  let resetHabits = habits.map((habit) => {
    let resetHabit = { ...habit, id: counter };
    counter++;
    return resetHabit;
  });
  return resetHabits;
};
