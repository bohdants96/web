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
                    <Room room={{id: 1, name: 'Room #1', num_of_seats: '11'}}/>
                    <Room room={{id: 2, name: 'Room #2', num_of_seats: '21'}}/>
                    <Room room={{id: 3, name: 'Room #3', num_of_seats: '6'}}/>
                </div>
            </section>
        </main>
    )
}

export default MainPage;

