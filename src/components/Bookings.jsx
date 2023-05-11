import React, {useEffect, useState} from 'react';
import Hero from "./Hero";
import Books from "./Books";
import axios from "axios";

const Bookings = () => {
    const [books, setBooks] = useState([])

    async function getBook() {
        // Get the username and password from sessionStorage
        const username = sessionStorage.getItem('username');
        const password = sessionStorage.getItem('password');

        console.log(username)
        try {
            const response = await axios.get(`http://127.0.0.1:5000/user/${username}/books`, {
                auth: {
                    username,
                    password,
                }
            })
            setBooks(response.data)
            console.log(books)
        } catch (err) {
            setBooks(null)
        }
    }

    useEffect(() => {
        getBook()
    }, []);

    return (
        <main>
            <Hero/>
            <section className="recommended-events">
                {books != null ? (
                    <h2>Your bookings</h2>) : (<h2>Here will be your bookings!</h2>)}
                <div className="event-list" id="event-list">
                    {books != null ? (
                                books.length === 0 ? (
                                    <h2>You don't have books</h2>
                                ) : (
                                    books.map((book) =>
                                        <Books book={book} key={book.id}/>)
                                )) : (
                        <h2>Please, login!</h2>
                        )}
                        </div>
                        </section>
                        </main>
                        );
                    };

export default Bookings;