// import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


import Header from './components/Header';
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import ProfilePage from "./components/ProfilePage";
import Bookings from "./components/Bookings";
import AudiencePage from "./components/AudiencePage";
import LoginPage from "./components/LoginPage";
const App = () => {
  return (
    <>
      <Header/>
        <Routes>
            <Route path="/main" element={<MainPage/>}/>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/bookings" element={<Bookings/>}/>
            <Route path="/rooms" element={<AudiencePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
        <Footer/>
    </>
 );
}

export default App;