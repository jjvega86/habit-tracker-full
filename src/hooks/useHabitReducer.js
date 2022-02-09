import { useReducer } from "react";

export const initialState = {
  habits: [
    { text: "Meditate", streak: 0 },
    { text: "Run", streak: 0 },
    { text: "Sleep", streak: 0 },
  ],
};

export const habitReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, habits: [...state.habits, action.payload] };
    default:
      return state;
  }
};

export default function useHabitReducer() {
  const [habitState, habitDispatch] = useReducer(habitReducer, initialState);

  return [habitState, habitDispatch];
}
