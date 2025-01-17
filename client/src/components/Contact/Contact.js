import React from 'react';
import './Contact.css';
import { Element } from 'react-scroll';
import { IconButton } from '@material-ui/core';
import { LinkedIn } from '@material-ui/icons';

const Contact = () => {
    return (
        <Element name="contact" className='contact'>
            <h1>Contact</h1>
            <div className='contactContainer'>
                <p>Email: <span>chandinisureshkumar@gmail.com</span></p>
                <p>Github Link: 
                    <a href="https://github.com/chandini040990"><span> https://github.com/chandini040990</span></a>
                </p>
                <div className='contact_icons'>
                    <a href="https://www.linkedin.com/in/chandini-sureshkumar-0a34b2141/">
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                    </a>
                </div>
            </div>
        </Element >
    );
}

export default Contact;
