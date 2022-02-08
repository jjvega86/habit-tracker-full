import { Header, Container } from "./HabitPage.styles";
import HabitList from "../HabitList/HabitList";

const dummyHabits = [
  { text: "Meditate", streak: 0 },
  { text: "Run", streak: 0 },
  { text: "Sleep", streak: 0 },
];

export default function HabitPage() {
  return (
    <>
      <Header>My Habit Tracker</Header>
      <Container>
        <HabitList habits={dummyHabits} />
      </Container>
    </>
  );
}
