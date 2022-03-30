import { useHabitData } from "../../../hooks/useHabitData";

import HabitList from "../HabitList/HabitList";
import HabitForm from "../HabitForm/HabitForm";
import Modal from "../../../components/Modal/Modal";
import { Container } from "../../../globalStyles";

export default function HabitPage() {
  const { habitState, habitDispatch } = useHabitData();

  const handleClose = () => {
    habitDispatch({ type: "TOGGLE" });
  };

  return (
    <>
      <Container>
        <button onClick={handleClose}>Add Habit</button>
        {habitState.isOpen && (
          <Modal text={"Add a Habit!"} handleClose={handleClose}>
            <HabitForm
              dispatch={habitDispatch}
              currentText={habitState.currentText}
            />
          </Modal>
        )}
        <HabitList habits={habitState.habits} />
      </Container>
    </>
  );
}
