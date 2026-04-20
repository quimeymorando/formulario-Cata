import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ConfirmationPage from './pages/ConfirmationPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/confirmacion-lavosdelamaternidad" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  )
}

export default App
