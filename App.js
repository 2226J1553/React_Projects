import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Tvshows from './Components/Tvshows';
import { Menus } from './Components/Menus';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Menus/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
