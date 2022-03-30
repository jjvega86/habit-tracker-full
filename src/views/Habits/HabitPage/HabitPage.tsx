import { useHabitData } from "../../../hooks/useHabitData";

import HabitList from "../HabitList/HabitList";
import HabitForm from "../HabitForm/HabitForm";
import Modal from "../../../components/Modal/Modal";
import { Container } from "../../../globalStyles";

import useGetHabitsQuery from "../../../hooks/useGetHabitsQuery";

export default function HabitPage() {
  const { habitState, habitDispatch } = useHabitData();

  // habitState.habits initially
  //TODO: Refactor enhanced reducer to use React Query based hooks for async data
  //! ^^ NEXT TODO - WANT CUSTOM REDUCER TO HANDLE STATE MANAGEMENT

  const { habits, isLoading } = useGetHabitsQuery();

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
        {isLoading ? <p>Loading...</p> : <HabitList habits={habits} />}
      </Container>
    </>
  );
}
