import { useReducer } from "react";

export const initialState = {
  habits: [
    { id: 1, text: "Meditate", streak: 0 },
    { id: 2, text: "Run", streak: 0 },
    { id: 3, text: "Sleep", streak: 0 },
  ],
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
        habits: [
          ...state.habits,
          { id: state.habits.length + 1, text: action.payload, streak: 0 },
        ],
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

  return [habitState, habitDispatch];
}
