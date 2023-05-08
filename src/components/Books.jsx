import React from 'react';
import '../assets/css/Books.css'

const Books = (props) => {
    return (
        <div className='room'>
            <img src="https://via.placeholder.com/150x150" alt="Room Image"/>
                <h3>{props.book.room_id}</h3>
                <p>Capacity: {props.book.num_of_people}</p>
                <p>From: {props.book.time_start}</p>
                <p>To: {props.book.time_end}</p>
                <div className="test3">
                    <button className="button" type="edit" id="edit">Edit</button>
                    <button className="button" type="button" id="book-btn">Cancel</button>
                </div>
        </div>
    );
};

export default Books;