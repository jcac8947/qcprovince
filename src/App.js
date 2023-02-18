import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection'
import Cards from './components/Cards';
import Navbar from './components/Navbar';
 
function App() {
    return (
        <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact />
            </Routes>
            <HeroSection/>
            <Cards/>
        </Router>
        </>
    );
}

export default App;