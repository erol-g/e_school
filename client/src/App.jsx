import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './Login';
import Home from './Pages/Home';
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>

      
    </>
  )
}

export default App
