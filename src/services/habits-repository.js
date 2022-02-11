import {
  getData,
  addData,
  increaseData,
  resetData,
  deleteData,
} from "./localBase";

export const getHabits = () => {
  return getData();
};

export const addHabit = (data) => {
  return addData(data);
};

export const addToHabitStreak = (habitId) => {
  return increaseData(habitId);
};

export const resetHabitStreak = (habitId) => {
  return resetData(habitId);
};

export const deleteHabit = (habitId) => {
  return deleteData(habitId);
};
