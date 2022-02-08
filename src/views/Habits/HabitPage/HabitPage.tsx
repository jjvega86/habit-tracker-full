import { Header, Container } from "./HabitPage.styles";
import Habit from "../Habit/Habit";

export default function HabitPage() {
  return (
    <>
      <Header>My Habit Tracker</Header>
      <Container>
        <Habit habitText="Meditate" habitStreak={0} />
      </Container>
    </>
  );
}
