import React from "react";
import GlobalStyle from "./globalStyles";

// Import Views
import HabitPage from "./views/Habits/HabitPage/HabitPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <HabitPage />
    </>
  );
}

export default App;
