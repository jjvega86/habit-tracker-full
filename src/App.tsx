import GlobalStyle from "./globalStyles";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

// Views
import HabitPage from "./views/Habits/HabitPage/HabitPage";
import RegisterPage from "./views/Register/RegisterPage";
import LoginPage from "./views/Login/LoginPage";

// Components
import HabitHeader from "./components/HabitHeader/HabitHeader";
import Navbar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <HabitHeader />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HabitPage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
