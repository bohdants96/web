import React, {useEffect, useState} from 'react';
import axios from "axios";

const User = () => {

    const [user, setUser] = useState([])

    async function getBook() {
        const response = await axios.get('http://127.0.0.1:5000/user/2')
        setUser(response.data)
    }

    useEffect(() => {
        getBook()
    }, []);
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '250px', // Add quotes around the value for consistency
        }}>
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
        </div>

    );
};

export default User;