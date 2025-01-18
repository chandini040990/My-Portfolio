import React from 'react';
import { Link } from 'react-scroll';
import './TopContent.css';
import Chandini_Resume_Latest from '../TopContent/Chandini_Resume_Latest.pdf';

const TopContent = () => {
    return (
        <div className='topContent'>
            <div className='topContent_container'>
                <h1>Chandini Sureshkumar</h1>
                <p>Full stack Developer - MERN</p>
                <a href={Chandini_Resume_Latest} download="DownloadCV" target='_blank'>
                    <button className='topContent_downloadButton'>Download CV</button>
                </a>
                <Link to="projects" smooth={true} duration={500}>
                    <button className='topContent_workButton'>My Work</button>
                </Link>
            </div>
        </div>
    );
}

export default TopContent;
