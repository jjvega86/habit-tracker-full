import HabitButton from "../HabitButton/HabitButton";
import { HabitContainer } from "./Habit.styles";

interface HabitProps {
  habitText: string;
  habitStreak: number;
}

export default function Habit({ habitText, habitStreak }: HabitProps) {
  return (
    <HabitContainer>
      <p>{habitText}</p>
      <p>{habitStreak}</p>
      <HabitButton buttonType="done" />
      <HabitButton buttonType="missed" />
      <HabitButton buttonType="delete" />
    </HabitContainer>
  );
}
