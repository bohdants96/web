import React, {useEffect, useState} from 'react';
import Hero from "./Hero";
import Room from "./Room";
import '../assets/css/AudiencePage.css'
import axios from "axios";


const AudiencePage = () => {

    const [rooms, setRooms] = useState([])

    async function getRoom() {
        const response = await axios.get('http://127.0.0.1:5000/room')
        setRooms(response.data)
        console.log(rooms)
    }

    useEffect(() => {
        getRoom()
    }, []);

    return (
        <main>
            <Hero/>
            <section className="recommended-events">
                <h2>Recommended Rooms</h2>
                <div className="event-list">
                    {rooms.map((room) =>
                        <Room room={room} key={room.id}/>)}
                </div>
            </section>
        </main>
    );
};

export default AudiencePage;