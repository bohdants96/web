import React from 'react';
import '../assets/css/ProfilePage.css'
import User from "./User";
import ContactInfo from "./ContactInfo";
import axios from "axios";

const ProfilePage = () => {

    const test1  = sessionStorage.getItem('username');
    const test2 = sessionStorage.getItem('password');

    function refreshPage() {
        // eslint-disable-next-line no-restricted-globals
        location.href = '/profile'
    }

    function getLog() {
        // eslint-disable-next-line no-restricted-globals
        location.href = '/login'
    }

    function editUser(){
        // eslint-disable-next-line no-restricted-globals
        location.href = '/edit_me'
    }

    async function logoutUser() {
        // Get the username and password from sessionStorage=
        const username = sessionStorage.getItem('username');
        const password = sessionStorage.getItem('password');

        try {
            const response = await axios.get(`http://127.0.0.1:5000/user/${username}`, {
                auth: {
                    username,
                    password,
                }
            });
            sessionStorage.removeItem('username');
            sessionStorage.removeItem('password');
            refreshPage();
        } catch (err) {
            return (
                <main>
                    <section className="profile">
                        <h1>Error</h1>
                    </section>
                </main>
            )
        }
    }

    async function deleteUser() {
        // Get the username and password from sessionStorage=
        const username = sessionStorage.getItem('username');
        const password = sessionStorage.getItem('password');

        try {
            const response = await axios.delete(`http://127.0.0.1:5000/user/${username}`, {
                auth: {
                    username,
                    password,
                }
            });
            sessionStorage.removeItem('username');
            sessionStorage.removeItem('password');
            refreshPage();
        } catch (err) {
            return (
                <main>
                    <section className="profile">
                        <h1>Error</h1>
                    </section>
                </main>
            )
        }
    }


    return (
        <main>
            <section className="profile">
                <h2>Your Profile</h2>
                <div id="stats" className="stats">
                    <User/>
                </div>
                {test1 === null & test2 === null?(
                <nav>
                    <ul>
                        <li>
                            <button onClick={getLog}
                                    style={{
                                        color: "black",
                                        fontSize: '30px',
                                        backgroundColor: 'lightgray',
                                        border: 'none',
                                        borderRadius: '5px',
                                        padding: '10px'
                                    }}>Login
                            </button>
                        </li>
                    </ul>
                </nav>):(<nav>
                    <ul>
                        <li>
                            <button onClick={editUser} style={{
                                color: "black",
                                fontSize: '30px',
                                backgroundColor: 'lightgray',
                                border: 'none',
                                borderRadius: '5px',
                                padding: '10px'
                            }}>Edit
                            </button>
                        </li>
                        <li>
                            <button onClick={logoutUser} style={{
                                color: "black",
                                fontSize: '30px',
                                backgroundColor: 'lightgray',
                                border: 'none',
                                borderRadius: '5px',
                                padding: '10px'
                            }}>Logout
                            </button>
                        </li>
                        <li>
                            <button onClick={deleteUser} style={{
                                color: "black",
                                fontSize: '30px',
                                backgroundColor: 'lightgray',
                                border: 'none',
                                borderRadius: '5px',
                                padding: '10px'
                            }}>Delete
                            </button>
                        </li>
                    </ul>

                </nav>)}
                <div id="contact" className="contact">
                    <ContactInfo/>
                </div>
            </section>
        </main>
    );
};

export default ProfilePage;