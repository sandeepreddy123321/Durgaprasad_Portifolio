import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './Components/HomePage';
import ContactPage from './Components/ContactPage';
import ProjectPage from './Components/ProjectPage';
import AboutPage from './Components/AboutPage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} /> {/* Add this if you have About page */}

        {/* Add other routes here */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
