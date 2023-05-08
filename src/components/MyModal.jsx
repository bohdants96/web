import React from 'react';
import cl from '../assets/css/MyModal.module.css'

const MyModal = ({visible, setVisible}) => {

    const rootClasses = [cl.myModal]
    if (visible) {
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={event => event.stopPropagation()}>
                <h2>Book Now</h2>
                <p>Please fill out the form below to book this room.</p>
                <form>
                    <label htmlFor="id">Id user:</label>
                    <input type="number" id="id"/>
                    <br/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email"/>
                    <br/>
                    <label htmlFor="id_room">Id room:</label>
                    <input type="number" id="id_room"/>
                    <br/>
                    <label htmlFor="num_of_seats">Number of people:</label>
                    <input type="number" id="num_of_seats"/>
                    <br/>
                    <label htmlFor="datetime_from">Datetime from:</label>
                    <input type="datetime-local" id="datetime_from"/>
                    <br/>
                    <label htmlFor="datetime_to">Datetime to:</label>
                    <input type="datetime-local" id="datetime_to"/>
                    <br/>
                    <div className="test">
                        <button type="submit"
                                onClick={() => setVisible(false)}>Book
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