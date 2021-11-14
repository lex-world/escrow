import React from 'react'

/**
 * @packages npm registry packages
 */
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 /**
 * @pages custom page components
 */
import Home from './Pages/Home/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}
