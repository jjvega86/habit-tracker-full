import GlobalStyle from "./globalStyles";

// Import Views
//TODO: Install React Router and set up routing + private routes
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
