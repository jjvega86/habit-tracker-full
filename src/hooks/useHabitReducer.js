import { useReducer } from "react";

export const initialState = {
  habits: [],
  currentText: "",
  isOpen: false,
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
    case "TOGGLE":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export default function useHabitReducer() {
  const [habitState, habitDispatch] = useReducer(habitReducer, initialState);

  return [habitState, habitDispatch];
}
