import HabitList from "../HabitList/HabitList";
import HabitForm from "../HabitForm/HabitForm";
import Modal from "../../../components/Modal/Modal";
import { Container, Button } from "../../../globalStyles";

import { useHabitData } from "../../../hooks/useHabitData";
import useGetHabitsQuery from "../../../hooks/queries/useGetHabitsQuery";

export default function HabitPage() {
  const { habitState, habitDispatch } = useHabitData();
  const { habits, isLoading } = useGetHabitsQuery();

  return (
    <>
      <Container>
        <Button onClick={() => habitDispatch({ type: "TOGGLE" })}>
          Add Habit
        </Button>
        {habitState.isOpen && (
          <Modal
            text={"Add a Habit!"}
            handleClose={() => habitDispatch({ type: "TOGGLE" })}
          >
            <HabitForm
              dispatch={habitDispatch}
              currentText={habitState.currentText}
            />
          </Modal>
        )}
        {isLoading ? <div>Loading... </div> : <HabitList habits={habits} />}
      </Container>
    </>
  );
}
