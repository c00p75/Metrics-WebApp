import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Continents from './components/Continents/Continents';
import CountryDetails from './components/Country Details/CountryDetails';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:Continents" element={<Continents />} />
        <Route path="/:Continents/:country" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
