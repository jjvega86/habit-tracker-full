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
  console.log(action);
  switch (action.type) {
    case "ADD":
      return {
        habits: [
          ...state.habits,
          { id: state.habits.length + 1, text: action.payload, streak: 0 },
        ],
        currentText: "",
      };
    case "FIELD":
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    default:
      return state;
  }
};

export default function useHabitReducer() {
  const [habitState, habitDispatch] = useReducer(habitReducer, initialState);

  return [habitState, habitDispatch];
}
