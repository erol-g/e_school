import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './Login';
import Home from './Pages/Home';
import DirectorPage from '../DirectorPage';
import TeachersPage from '../TeachersPage';
import StudentsPage from '../StudentsPage';
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/director-page' element={<DirectorPage/>}></Route>
      <Route path='/teacher-page' element={<TeachersPage/>}></Route>
      <Route path='/student-page' element={<StudentsPage/>}></Route>

    </Routes>

      
    </>
  )
}

export default App
