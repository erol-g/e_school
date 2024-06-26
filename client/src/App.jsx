import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import DirectorPage from "./Pages/DirectorPage";
import TeachersPage from "./Pages/TeachersPage";
import StudentsPage from "./Pages/StudentsPage";
import StudentsGradeInfo from "./Pages/StudentsGradeInfo";
import ChangePassword from "./Pages/ChangePassword";
import Notifications from "./Pages/DirectorPages/Notifications";
import AllStudents from "./Pages/AllStudents";
import { ToastContainer } from "react-toastify";
import RegisterClass from "./Pages/RegisterClass";
import RegisterStudentPage from "./Pages/RegisterStudentPage";
import RegisterTeacherPage from "./Pages/RegisterTeacherPage";
import ClasssListByTeacher from "./Pages/ClassListByTeacher";
import Profile from "./Pages/Profile";
import Grade from "./Pages/Grade";
import GeneralInformation from "./Pages/GeneralInformation";
import SeeGrades from "./Pages/SeeGrades"
import SendMessage from "./Pages/SendMessage";


function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/director-page" element={<DirectorPage />}></Route>
        <Route path="/teacher-page" element={<TeachersPage />}></Route>
        <Route path="/student-page" element={<StudentsPage />}></Route>
        <Route path="/change-password" element={<ChangePassword />}></Route>
        <Route path="/register-class" element={<RegisterClass />}></Route>
        <Route path="/notifications" element={<Notifications />}></Route>
        <Route path="/all-students" element={<AllStudents />}></Route>
        <Route path="/class-list" element={<ClasssListByTeacher />}></Route>
        <Route path="/grade" element={<Grade />}></Route>
        <Route
          path="/register-student"
          element={<RegisterStudentPage />}
        ></Route>
        <Route
          path="/getGrade/:id"
          element={<StudentsGradeInfo />}
        ></Route>
        <Route
          path="/register-teacher"
          element={<RegisterTeacherPage />}
        ></Route>
        <Route
          path="/school-information"
          element={<GeneralInformation />}
        ></Route>
        <Route path="/see-grades" element={<SeeGrades />}></Route>
 <Route
          path="/send-message"
          element={<SendMessage />}
        ></Route>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default App;
