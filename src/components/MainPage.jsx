import React from 'react'
import '../assets/css/MainPage.css'
import Hero from "./Hero";
import Room from "./Room";

const MainPage = () => {
    return (
        <main>
            <Hero/>
            <section className="recommended-events">
                <h2>Recommended Rooms</h2>
                <div className="event-list">
                    <Room room={{name: 'Room #1', capacity: '11', location: 'Lviv, Ukraine'}}/>
                    <Room room={{name: 'Room #2', capacity: '21', location: 'Kyiv, Ukraine'}}/>
                    <Room room={{name: 'Room #3', capacity: '6', location: 'Kharkiv, Ukraine'}}/>
                </div>
            </section>
        </main>
    )
}

export default MainPage;

