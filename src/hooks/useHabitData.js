import { useContext } from "react";
import HabitContext from "../context/HabitContext";

export const useHabitData = () => useContext(HabitContext);
