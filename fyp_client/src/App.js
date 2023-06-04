
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Menubar from './Components/Menubar';
import Login from './Components/Login';
import Register from './Components/Register';
import Testing from './Components/Testing';

function App() {
  return (
    <>
  <Menubar/>
  <Routes>
  <Route path='/' element={<Homepage/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/register' element={<Register />} />
  <Route path='/testing'  element={<Testing/>} />
  </Routes>
    </>);
}

export default App;
