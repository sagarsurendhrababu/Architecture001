
//importing Pages and components
import Dashboard from './pages/Dashboard'
import Login from './pages/Login';

//import Routes from react-router-dom
import { Route, Routes } from 'react-router-dom';

import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
