import React, {useEffect, useState} from 'react';
import MyModal from "./MyModal";
import axios from "axios";

const Room = (props) => {
    const [modal, setModal] = useState(false);

    return (
        <div className="room">
            <MyModal visible={modal} setVisible={setModal}>
            </MyModal>
            <img src="https://via.placeholder.com/150x150" alt="Room Image"/>
            <h3>{props.room.name}</h3>
            <p>Capacity: {props.room.num_of_seats}</p>
            <p>Location: Lviv, Ukraine</p>
            <button onClick={() => setModal(true)} className="button">Book Now</button>
        </div>
    );
};

export default Room;