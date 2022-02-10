import { get, add } from "./localBase";

export const getHabits = () => {
  return get();
};

export const addHabit = (data) => {
  return add(data);
};

export const addToHabitStreak = () => {};

export const resetHabitStreak = () => {};

export const deleteHabit = () => {};
