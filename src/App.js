import { Router } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/nav-bar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Profil from './components/profile-page/Profil';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
