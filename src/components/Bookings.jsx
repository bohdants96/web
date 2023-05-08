import React, {useEffect, useState} from 'react';
import Hero from "./Hero";
import Books from "./Books";
import axios from "axios";

const Bookings = () => {
    const [books, setBooks] = useState([])

    async function getBook() {
        const response = await axios.get('http://127.0.0.1:5000/user/2/books')
        setBooks(response.data)
        console.log(books)
    }

    useEffect(() => {
        getBook()
    }, []);

    return (
        <main>
            <Hero/>
            <section className="recommended-events">
                <h2>Your bookings</h2>
                <div className="event-list" id="event-list">
                    {books.map((book) =>
                        <Books book={book} key={book.id}/>)}
                </div>
            </section>
        </main>
    );
};

export default Bookings;