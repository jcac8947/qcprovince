import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Destination from './components/pages/Destination';
import Accomodation from './components/pages/Accomodation';
import SignUp from './components/pages/SignUp';

 
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/accomodation" element={<Accomodation />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
       
        </>
    );
}

export default App;