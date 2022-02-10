import { createContext, useCallback, useEffect } from "react";
import useHabitReducer, { initialState } from "../hooks/useHabitReducer";
import { addHabit } from "../services/habits-repository";

const HabitContext = createContext();

export default HabitContext;

export const HabitProvider = ({ children }) => {
  const [habitState, habitDispatch] = useHabitReducer();

  const enhancedDispatch = useCallback(async (action) => {
    switch (action.type) {
      case "ADD_HABIT":
        let newHabit = addHabit(action.payload);
        habitDispatch({ type: "ADD", payload: newHabit });
      default:
        habitDispatch(action);
    }
  }, []);

  let habitContextData = {
    habitState,
    habitDispatch: enhancedDispatch,
  };

  return (
    <HabitContext.Provider value={habitContextData}>
      {children}
    </HabitContext.Provider>
  );
};
