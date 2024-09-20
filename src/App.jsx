import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Presentation from "./pages/Presentation.jsx";
import Projets from "./pages/Projets.jsx";
import Competences from "./pages/Competences.jsx";
import Experience from './pages/Experience.jsx';
import Navbar from "./components/Navbar/Navbar.jsx";


function App() {

  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/presentation' element={<Presentation />} />
            <Route path='/projets' element={<Projets />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/competences' element={<Competences />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
