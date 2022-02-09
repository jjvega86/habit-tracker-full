import Habit from "../Habit/Habit";

interface HabitListProps {
  habits: { id: number; text: string; streak: number }[];
}

export default function HabitList({ habits }: HabitListProps) {
  let renderedHabits = habits.map((habit) => {
    return (
      <Habit
        key={habit.id}
        habitId={habit.id}
        habitText={habit.text}
        habitStreak={habit.streak}
      />
    );
  });
  return <>{renderedHabits}</>;
}
