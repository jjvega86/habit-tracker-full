import { useState } from "react";

import HabitList from "../HabitList/HabitList";
import HabitForm from "../HabitForm/HabitForm";
import Modal from "../../../components/Modal/Modal";
import { Container, Button } from "../../../globalStyles";

import useGetHabitsQuery from "../../../hooks/queries/useGetHabitsQuery";

export default function HabitPage() {
  const { habits, isLoading } = useGetHabitsQuery();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container>
        <Button onClick={() => setIsOpen(!isOpen)}>Add Habit</Button>
        {isOpen && (
          <Modal text={"Add a Habit!"} handleClose={() => setIsOpen(!isOpen)}>
            <HabitForm onSubmit={() => setIsOpen(!isOpen)} />
          </Modal>
        )}
        {isLoading ? <div>Loading... </div> : <HabitList habits={habits} />}
      </Container>
    </>
  );
}
