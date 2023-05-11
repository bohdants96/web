import React, {useState} from 'react';
import '../assets/css/EditMePage.css'
import axios from "axios";

const SignUpPage = () => {
    const [usernameEdit, setUsername] = useState('');
    const [passwordEdit, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [phone, setPhone] = useState('');
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


    const handleSubmit = async (event) => {

        const userAuth = sessionStorage.getItem('username');
        const passwordAuth = sessionStorage.getItem('password');
        console.log(userAuth)
        console.log(passwordAuth)

        event.preventDefault();
        try {
            const response = await axios.put(`http://127.0.0.1:5000/user/${userAuth}`, {
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: passwordEdit,
                phone: phone,
            }, {
                auth: {
                    username: userAuth,
                    password: passwordAuth,
                }
            });
            if (response.status === 200) {
                sessionStorage.removeItem('username');
                sessionStorage.removeItem('password');
                console.log(response.status)
                // eslint-disable-next-line no-restricted-globals
                location.href = '/login';
            }
        } catch (err) {
            console.log(userAuth)
            console.log(passwordAuth)
            if (err.response.data.message !== null) {
                setE(err.response.data.message)
            } else {
                setE(err.response.data)
            }
            console.log(err)
        }
    }

    return (
        <div className="sig-container">
            <h2>Edit me!</h2>
            <form onSubmit={handleSubmit}>
                <input type="password" placeholder="Password" value={passwordEdit} onChange={handlePasswordChange}/>
                <input type="password" placeholder="Confirm Password" value={confirmPassword}
                       onChange={handleConfirmPasswordChange}/>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
                <input type="number" placeholder="phone" value={phone} onChange={handlePhoneChange}/>
                <input type="text" placeholder="First Name" value={first_name} onChange={handleFirstChange}/>
                <input type="text" placeholder="Last Name" value={last_name} onChange={handleLastChange}/>
                <p>{e}</p>
                <div className="btns">
                    <button>Save</button>
                </div>
            </form>
        </div>
    );
};

export default SignUpPage;
