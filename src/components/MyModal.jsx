import React, {useState} from 'react';
import cl from '../assets/css/MyModal.module.css'
import axios from "axios";

const MyModal = ({visible, setVisible}) => {

    const [id, setId] = useState(0);
    const [email, setEmail] = useState('');
    const [room_id, setRoom] = useState(0);
    const [num_of_seats, setNum] = useState(0);
    const [date_from, setDateFrom] = useState('');
    const [date_to, setDateTo] = useState('');


    const handleIdChange = (event) => {
        setId(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleRoomChange = (event) => {
        setRoom(event.target.value);
    }
    const handleNumChange = (event) => {
        setNum(event.target.value);
    }
    const handleFromChange = (event) => {
        setDateFrom(event.target.value);
    }
    const handleToChange = (event) => {
        setDateTo(event.target.value);
    }

    const rootClasses = [cl.myModal]
    if (visible) {
        rootClasses.push(cl.active)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    async function submit() {
        // Get the username and password from sessionStorage
        const username = sessionStorage.getItem('username');
        const password = sessionStorage.getItem('password');
        const url = 'http://localhost:5000/user/book';
        const data = {
            room_id: room_id,
            user_id: id,
            num_of_people: num_of_seats,
            time_start: date_from,
            time_end: date_to,
        };
        const config = {
            auth: {
                username,
                password,
            }
        };

        await axios.post(url, data, config)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                if (error.response.data.message !== null) {
                    alert(error.response.data.message)
                }else{
                    alert(error.response.data)
                }
                console.log(error);
            });
        setVisible(false);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={event => event.stopPropagation()}>
                <h2>Book Now</h2>
                <p>Please fill out the form below to book this room.</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="id">Id user:</label>
                    <input type="number" id="id" value={id} onChange={handleIdChange}/>
                    <br/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange}/>
                    <br/>
                    <label htmlFor="id_room">Id room:</label>
                    <input type="number" id="id_room" value={room_id} onChange={handleRoomChange}/>
                    <br/>
                    <label htmlFor="num_of_seats">Number of people:</label>
                    <input type="number" id="num_of_seats" value={num_of_seats} onChange={handleNumChange}/>
                    <br/>
                    <label htmlFor="datetime_from">Datetime from:</label>
                    <input type="datetime-local" id="datetime_from" value={date_from} onChange={handleFromChange}/>
                    <br/>
                    <label htmlFor="datetime_to">Datetime to:</label>
                    <input type="datetime-local" id="datetime_to" value={date_to} onChange={handleToChange}/>
                    <br/>
                    <div className="test">
                        <button type="submit"
                                onClick={submit}>Book
                        </button>
                        <button type="button"
                                onClick={() => setVisible(false)}>Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyModal;