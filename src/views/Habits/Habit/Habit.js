import HabitButton from "../HabitButton/HabitButton";
import { HabitContainer } from "./Habit.styles";

import useDeleteHabitMutation from "../../../hooks/mutations/useDeleteHabitMutation";

// interface HabitProps {
//   habitText: string;
//   habitStreak: number;
//   habitId: number;
// }

export default function Habit({ habitId, habitText, habitStreak }) {
  const { removeHabit } = useDeleteHabitMutation();
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
        clickHandler={() => removeHabit.mutate(habitId)}
        buttonType="delete"
      />
    </HabitContainer>
  );
}
