import React from 'react';
import '../assets/css/ProfilePage.css'
import User from "./User";
import ContactInfo from "./ContactInfo";

const ProfilePage = () => {
    return (
        <main>
            <section className="profile">
                <h2>Your Profile</h2>
                <nav>
                    <ul>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
                <div id="stats" className="stats">
                    <User/>
                </div>
                <div id="contact" className="contact">
                    <ContactInfo/>
                </div>
            </section>
        </main>
    );
};

export default ProfilePage;