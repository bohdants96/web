import React, {useEffect, useState} from 'react';
import axios from "axios";

const User = (props) => {

    const [user, setUser] = useState([])


    async function getUserInfo() {
        // Get the username and password from sessionStorage
        const username = sessionStorage.getItem('username');
        const password = sessionStorage.getItem('password');

        console.log(username)
        try{
        const response = await axios.get(`http://127.0.0.1:5000/user/${username}`, {
            auth: {
                username,
                password,
            }
        });
        setUser(response.data)
        }
        catch (err){
            setUser(null)
        }
    }

    useEffect(() => {
        getUserInfo()
    }, []);
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '250px', // Add quotes around the value for consistency
        }}>
            {user != null ? (
                <ul style={{listStyleType: 'none', margin: 0, padding: 0}}>
                    {/* Set list-style-type to none, and remove default margin and padding */}
                    <li style={{fontSize: '25px', marginBottom: '10px'}}>
                        <strong>ID:</strong> {user.id}
                    </li>
                    <li style={{fontSize: '25px', marginBottom: '10px'}}>
                        <strong>Username:</strong> {user.username}
                    </li>
                    <li style={{fontSize: '25px', marginBottom: '10px'}}>
                        <strong>Email:</strong> {user.email}
                    </li>
                    <li style={{fontSize: '25px', marginBottom: '10px'}}>
                        <strong>First Name:</strong> {user.first_name}
                    </li>
                    <li style={{fontSize: '25px', marginBottom: '10px'}}>
                        <strong>Last Name:</strong> {user.last_name}
                    </li>
                </ul>
            ) : (
                <p style={{fontSize: '100px'}}>Login, please!</p>
            )}
        </div>

    );
};

export default User;