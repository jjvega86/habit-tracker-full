import HabitButton from "../HabitButton/HabitButton";
import { HabitContainer } from "./Habit.styles";

interface HabitProps {
  habitText: string;
  habitStreak: number;
  habitId: number;
}

export default function Habit({ habitId, habitText, habitStreak }: HabitProps) {
  return (
    <HabitContainer>
      <p>{habitText}</p>
      <p>{habitStreak}</p>
      <HabitButton clickHandler={() => console.log("Done")} buttonType="done" />
      <HabitButton
        clickHandler={() => console.log("Missed")}
        buttonType="missed"
      />
      <HabitButton
        clickHandler={() => console.log("Delete")}
        buttonType="delete"
      />
    </HabitContainer>
  );
}
