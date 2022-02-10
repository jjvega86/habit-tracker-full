export const get = () => {
  return JSON.parse(localStorage.getItem("habits"));
};

export const add = (habit) => {
  let currentHabits = get() === null ? [] : get();
  console.log(currentHabits);
  let newHabit = {
    id: currentHabits.length + 1,
    text: habit,
    streak: 0,
  };
  localStorage.setItem("habits", JSON.stringify([...currentHabits, newHabit]));
  return newHabit;
};

export const increaseStreak = (habitId) => {
  let currentHabits = get() === null ? [] : get();
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

export const reset = (habitId) => {
  let currentHabits = get() === null ? [] : get();
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

export const deleteItem = (habitId) => {
  let currentHabits = get() === null ? [] : get();
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
