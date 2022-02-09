import { useContext } from "react";
import HabitContext from "../../../context/HabitContext";

import HabitButton from "../HabitButton/HabitButton";
import { HabitContainer } from "./Habit.styles";

interface HabitProps {
  habitText: string;
  habitStreak: number;
  habitId: number;
}

export default function Habit({ habitId, habitText, habitStreak }: HabitProps) {
  const { habitDispatch } = useContext(HabitContext);
  return (
    <HabitContainer>
      <p>{habitText}</p>
      <p>{habitStreak}</p>
      <HabitButton
        clickHandler={() => habitDispatch({ type: "DONE", payload: habitId })}
        buttonType="done"
      />
      <HabitButton
        clickHandler={() => habitDispatch({ type: "MISSED", payload: habitId })}
        buttonType="missed"
      />
      <HabitButton
        clickHandler={() => habitDispatch({ type: "DELETE", payload: habitId })}
        buttonType="delete"
      />
    </HabitContainer>
  );
}
