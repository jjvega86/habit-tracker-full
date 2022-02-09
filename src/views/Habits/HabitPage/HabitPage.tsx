import { useContext } from "react";
import HabitContext from "../../../context/HabitContext";

import { Header, Container } from "./HabitPage.styles";
import HabitList from "../HabitList/HabitList";
import HabitButton from "../HabitButton/HabitButton";
import HabitForm from "../HabitForm/HabitForm";

export default function HabitPage() {
  const { habitState, habitDispatch } = useContext(HabitContext);
  console.log(habitState);

  return (
    <>
      <Header>My Habit Tracker</Header>
      <Container>
        <HabitForm
          dispatch={habitDispatch}
          currentText={habitState.currentText}
        />
        <HabitList habits={habitState.habits} />
      </Container>
    </>
  );
}
