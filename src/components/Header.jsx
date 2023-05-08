import React from 'react'
import '../assets/css/App.css'

const Header = () => {
  return (
    <header>
    <nav>
        <ul>
            <li><a href="/main">Home</a></li>
            <li><a href="/rooms">Audience</a></li>
            <li><a href="/bookings">Bookings</a></li>
            <li><a href="/profile">Profile</a></li>
        </ul>
    </nav>
</header>
  )
}

export default Header;

