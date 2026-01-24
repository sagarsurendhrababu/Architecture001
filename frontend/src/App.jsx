
//importing Pages and components
import Dashboard from './pages/Dashboard'
import Login from './pages/Login';

//import Routes from react-router-dom
import { Route, Routes } from 'react-router-dom';

//import Component and pages
import Layout from './layout/Layout';

import './App.css'

function App() {


  return (
    <>
      <Layout>
        <Routes>        
          <Route path="/" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Layout>      
    </>
  )
}

export default App
