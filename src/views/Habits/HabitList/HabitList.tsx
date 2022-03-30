import Habit from "../Habit/Habit";

interface HabitListProps {
  habits: { id: number; habit_text: string; streak_count: number }[];
}

export default function HabitList({ habits }: HabitListProps) {
  console.log(habits);
  let renderedHabits = habits.map((habit) => {
    return (
      <Habit
        key={habit.id}
        habitId={habit.id}
        habitText={habit.habit_text}
        habitStreak={habit.streak_count}
      />
    );
  });
  return <>{renderedHabits}</>;
}
