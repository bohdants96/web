import React, {useState} from 'react';
import '../assets/css/LoginPage.css'
import axios from "axios";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [e, setE] = useState('');
    let error = 0

    function getSighUp() {
        // eslint-disable-next-line no-restricted-globals
        location.href = '/signup'
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    async function getLogin() {
        try {
            const response = await axios.post('http://127.0.0.1:5000/user/login', {
                username,
                password,
            }, {
                auth: {
                    username,
                    password,
                }
            });
            if (response.status === 200) {
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('password', password);
                console.log(response.status)
                // eslint-disable-next-line no-restricted-globals
                location.href = '/profile';
            }
        } catch (err) {

            setE(err.response.data);

            console.log(err)
        }
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange}/>
                <input type="password" placeholder="Password" value={password}
                       onChange={handlePasswordChange}/>
                <p>{e}</p>
                <div className="btns">
                    <button onClick={getLogin}>Login</button>
                    <button onClick={getSighUp}>Sigh up</button>
                </div>
            </form>
        </div>
    );

};

export default LoginPage;