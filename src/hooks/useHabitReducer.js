import { useEffect, useReducer } from "react";
import { getHabits } from "../services/habits-repository";

export const initialState = {
  habits: [],
  currentText: "",
};

export const habitReducer = (state, action) => {
  switch (action.type) {
    case "FIELD":
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    case "ADD":
      return {
        habits: [...state.habits, action.payload],
        currentText: "",
      };
    case "UPDATE":
      return {
        ...state,
        habits: action.payload,
      };
    default:
      return state;
  }
};

export default function useHabitReducer() {
  const [habitState, habitDispatch] = useReducer(habitReducer, initialState);

  useEffect(() => {
    fetchHabits();
  }, []);

  const fetchHabits = () => {
    let habits = getHabits();
    if (!habits) return;
    habits.forEach((habit) => {
      habitDispatch({ type: "ADD", payload: habit });
    });
  };

  return [habitState, habitDispatch];
}
