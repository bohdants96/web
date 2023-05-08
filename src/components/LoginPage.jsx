import React from 'react';
import MainPage from "./MainPage";
import '../assets/css/LoginPage.css'

const LoginPage = () => {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <div className="btns">
                    <button>Login</button>
                    <button>Sigh up</button>
                </div>
            </form>
        </div>
);
};

export default LoginPage;