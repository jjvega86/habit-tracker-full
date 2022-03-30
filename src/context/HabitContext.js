import { createContext } from "react";
import useHabitReducer from "../hooks/useHabitReducer";

const HabitContext = createContext();

export default HabitContext;

export const HabitProvider = ({ children }) => {
  const [habitState, habitDispatch] = useHabitReducer();

  let habitContextData = {
    habitState,
    habitDispatch,
  };

  return (
    <HabitContext.Provider value={habitContextData}>
      {children}
    </HabitContext.Provider>
  );
};
