import React from 'react';
import '../assets/css/ContactInfo.css'

const ContactInfo = () => {
    return (
        <div className="test2">
            <h2>
                Contact us!
            </h2>
            <p className='mail'>
                <strong>Email: </strong>Bohdan.Tsisinskyi.KN.2021@lpnu.ua
            </p>
            <p className='lin'>
                <strong>LinkedIn:</strong> <a href='https://www.linkedin.com/in/bohdan-tsisinskyi-539913255/'
                             style={{color: '#333', textDecoration: 'none'}}>Bohdan Tsisinskyi</a>
            </p>
        </div>

    );
};

export default ContactInfo;