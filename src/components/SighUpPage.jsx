import React, {useState} from 'react';
import '../assets/css/SignUpPage.css'
import axios from "axios";

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [user_status, setStatus] = useState('');
    const [e, setE] = useState('');
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleFirstChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastChange = (event) => {
        setLastName(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        var len = user_status.length;
        var indexPos = len - 1;
        var number = parseInt(user_status.substring(indexPos), 10);
        try {
            const response = await axios.post('http://127.0.0.1:5000/user', {
                username: username,
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
                phone: phone,
                user_status: number,
            });
            if (response.status === 200) {
                console.log(response.status)
                // eslint-disable-next-line no-restricted-globals
                location.href = '/login';
            }
        } catch (err) {
            if (err.response.data.message !== null) {
                    setE(err.response.data.message)
                }else{
                    setE(err.response.data)
                }
            console.log(err)
        }
    }

    return (
        <div className="sig-container">
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange}/>
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                <input type="password" placeholder="Confirm Password" value={confirmPassword}
                       onChange={handleConfirmPasswordChange}/>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
                <input type="number" placeholder="phone" value={phone} onChange={handlePhoneChange}/>
                <input type="text" placeholder="First Name" value={first_name} onChange={handleFirstChange}/>
                <input type="text" placeholder="Last Name" value={last_name} onChange={handleLastChange}/>
                <input type="number" placeholder="Status" value={user_status} onChange={handleStatusChange}/>
                <p>{e}</p>
                <div className="btns">
                    <button>Sign up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUpPage;
