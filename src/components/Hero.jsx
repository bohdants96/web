import React from 'react';
import '../assets/css/Hero.css'
const Hero = () => {
    return (
        <section className="hero">
          <h1>Welcome to Audience Booking</h1>
          <p>Find the best audience for you and your friends!</p>
          <a href="/rooms" className="button">View Rooms</a>
        </section>
    );
};

export default Hero;