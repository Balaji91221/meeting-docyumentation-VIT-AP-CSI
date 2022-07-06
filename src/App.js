import React from 'react'
import Form from './components/Form/Form'
import Login from './components/login/Login'
import Firebase from './FirebaseAuth.js'
import Signin from './components/signin/Signin'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
        <Routes>
          {/* ===================================== User Route's ================================ */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/" element={<Signin />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App