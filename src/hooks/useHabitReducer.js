import { useEffect, useReducer } from "react";
import { get } from "../services/localBase";

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
    case "DELETE":
      let filteredHabits = state.habits.filter(
        (habit) => habit.id !== action.payload
      );
      return {
        ...state,
        habits: filteredHabits,
      };
    case "MISSED":
      let updatedHabits = state.habits.map((habit) => {
        if (habit.id === action.payload) {
          return { ...habit, streak: 0 };
        } else {
          return habit;
        }
      });
      return {
        ...state,
        habits: updatedHabits,
      };
    case "DONE":
      let newHabits = state.habits.map((habit) => {
        if (habit.id === action.payload) {
          return { ...habit, streak: habit.streak + 1 };
        } else {
          return habit;
        }
      });
      return {
        ...state,
        habits: newHabits,
      };
    default:
      return state;
  }
};

export default function useHabitReducer() {
  const [habitState, habitDispatch] = useReducer(habitReducer, initialState);
  console.log(habitState);

  useEffect(() => {
    fetchHabits();
  }, []);

  const fetchHabits = () => {
    let habits = get();
    habits.forEach((habit) => {
      habitDispatch({ type: "ADD", payload: habit });
    });
  };

  return [habitState, habitDispatch];
}
