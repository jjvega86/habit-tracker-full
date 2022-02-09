import { useContext } from "react";
import HabitContext from "../../../context/HabitContext";

import { Header, Container } from "./HabitPage.styles";
import HabitList from "../HabitList/HabitList";
import HabitButton from "../../../components/HabitButton/HabitButton";

const dummyHabits = [
  { text: "Meditate", streak: 0 },
  { text: "Run", streak: 0 },
  { text: "Sleep", streak: 0 },
];

export default function HabitPage() {
  const { habitState } = useContext(HabitContext);
  console.log(habitState);

  return (
    <>
      <Header>My Habit Tracker</Header>
      <Container>
        <HabitButton buttonType="add" />
        <HabitList habits={habitState.habits} />
      </Container>
    </>
  );
}
