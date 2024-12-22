import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
const App = () => {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            
          </Routes>
        </Router>
    </div>
  )
}

export default App
