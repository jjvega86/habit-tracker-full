import HabitButton from "../HabitButton/HabitButton";
import { HabitContainer } from "./Habit.styles";

import useHabitMutation from "../../../hooks/mutations/useHabitMutation";

// interface HabitProps {
//   habitText: string;
//   habitStreak: number;
//   habitId: number;
// }

export default function Habit({ habitId, habitText, habitStreak }) {
  const { removeHabit, updateStreak, zeroStreak } = useHabitMutation();
  return (
    <HabitContainer>
      <p>{habitText}</p>
      <p>{habitStreak}</p>
      <HabitButton
        clickHandler={() => updateStreak.mutate(habitId)}
        buttonType="done"
      />
      <HabitButton
        clickHandler={() => zeroStreak.mutate(habitId)}
        buttonType="missed"
      />
      <HabitButton
        clickHandler={() => removeHabit.mutate(habitId)}
        buttonType="delete"
      />
    </HabitContainer>
  );
}
