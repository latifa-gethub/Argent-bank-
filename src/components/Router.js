import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Profil from './profile-page/profil';
import Login from './login/Login';
import { NavBar } from './nav-bar/NavBar';
import LandingPage from './landingPage/LandingPage';
const Router = () => {
  return (
    <BrowserRouter>
    <NavBar/>    
    <Routes>
        <Route path="/" element={<LandingPage />}/>             
        <Route path="/profil" element={<Profil />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
