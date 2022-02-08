import Habit from "../Habit/Habit";

interface HabitListProps {
  habits: { text: string; streak: number }[];
}

export default function HabitList({ habits }: HabitListProps) {
  let renderedHabits = habits.map((habit) => {
    return <Habit habitText={habit.text} habitStreak={habit.streak} />;
  });
  return <>{renderedHabits}</>;
}
