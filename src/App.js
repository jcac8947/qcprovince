import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection'
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import accomodation from './components/pages/Accomodation';
import destination from './components/pages/Destination';
import Home from './components/pages/Home';
import signUp from './components/pages/SignUp';
 
function App() {
    return (
        <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact component={Home}/>
                <Route path="/destination" component={destination}/>
                <Route path="/accomodation" component={accomodation}/>
                <Route path="/sign-up" component={signUp}/>
            </Routes>
            <HeroSection/>
            <Cards/>
        </Router>
        </>
    );
}

export default App;