import React, { useState } from "react";
import Modal from "./components/Modal/Modal";
import GlobalStyle from "./globalStyles";

// Import Views
//TODO: Install React Router and set up routing + private routes
import HabitPage from "./views/Habits/HabitPage/HabitPage";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <GlobalStyle />
      <HabitPage />
      {isOpen && <Modal text={"Hello Modal"} handleClose={close} />}
      <button onClick={() => (isOpen ? close() : open())}>Launch modal</button>
    </>
  );
}

export default App;
