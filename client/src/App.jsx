import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import DirectorPage from "./Pages/DirectorPage";
import TeachersPage from "./Pages/TeachersPage";
import StudentsPage from "./Pages/StudentsPage";
import Notifications from "./Pages/DirectorPages/Notifications";
import RegisterStudentPage from "./Pages/RegisterStudentPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/director-page" element={<DirectorPage />}></Route>
        <Route path="/teacher-page" element={<TeachersPage />}></Route>
        <Route path="/student-page" element={<StudentsPage />}></Route>
        <Route path="/notifications" element={<Notifications />}></Route>
        <Route
          path="/register-student"
          element={<RegisterStudentPage />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
