import React, {useState} from 'react';
import '../assets/css/Books.css'
import axios from "axios";

const Books = (props) => {

    function refreshPage() {
        // eslint-disable-next-line no-restricted-globals
        location.href = '/bookings'
    }

    async function Cancel(id) {
        // Get the username and password from sessionStorage=
        const username = sessionStorage.getItem('username');
        const password = sessionStorage.getItem('password');

        try {
            const response = await axios.delete(`http://127.0.0.1:5000/user/book/${id}`, {
                auth: {
                    username,
                    password,
                }
            });
            refreshPage();
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='room'>
            <img src="https://via.placeholder.com/150x150" alt="Room Image"/>
            <h3>{props.book.room_id}(ID:{props.book.id})</h3>
            <p>Capacity: {props.book.num_of_people}</p>
            <p>From: {props.book.time_start}</p>
            <p>To: {props.book.time_end}</p>
            <div className="test3">
                <button className="button" type="edit" id="edit">Edit</button>
                <button className="button" type="button" id="book-btn" onClick={() => Cancel(props.book.id)}>Cancel</button>
            </div>
        </div>
    );
};

export default Books;