import { Header } from "./HabitPage.styles";
import Habit from "../Habit/Habit";

export default function HabitPage() {
  return (
    <>
      <Header>HABITS GO HERE</Header>
      <Habit habitText="Meditate" habitStreak={0} />
    </>
  );
}
