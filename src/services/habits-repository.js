import { get, add, increaseStreak, reset, deleteItem } from "./localBase";

export const getHabits = () => {
  return get();
};

export const addHabit = (data) => {
  return add(data);
};

export const addToHabitStreak = (habitId) => {
  return increaseStreak(habitId);
};

export const resetHabitStreak = (habitId) => {
  return reset(habitId);
};

export const deleteHabit = (habitId) => {
  return deleteItem(habitId);
};
