import { createContext, useCallback } from "react";
import useHabitReducer from "../hooks/useHabitReducer";
import {
  addHabit,
  addToHabitStreak,
  deleteHabit,
  resetHabitStreak,
} from "../services/habits-repository";

const HabitContext = createContext();

export default HabitContext;

export const HabitProvider = ({ children }) => {
  const [habitState, habitDispatch] = useHabitReducer();

  const enhancedDispatch = useCallback(async (action) => {
    switch (action.type) {
      case "ADD_HABIT":
        let newHabit = addHabit(action.payload);
        return habitDispatch({ type: "ADD", payload: newHabit });
      case "INCREASE_STREAK":
        let updatedHabits = addToHabitStreak(action.payload);
        return habitDispatch({ type: "UPDATE", payload: updatedHabits });
      case "RESET_HABIT":
        let habitsWithReset = resetHabitStreak(action.payload);
        return habitDispatch({ type: "UPDATE", payload: habitsWithReset });
      case "DELETE_HABIT":
        let reducedHabits = deleteHabit(action.payload);
        return habitDispatch({ type: "UPDATE", payload: reducedHabits });
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
