import React from 'react';
import './Experience.css';
import ExperienceBox from '../ExperienceBox/ExperienceBox';
import exp from './exp.jpeg';
import { Element } from 'react-scroll';

const Experience = () => {
    return (
        <Element name="exp" className='expContainer'>
            <h1>Experience</h1>
            <div className='expContainer_info' style={ {backgroundImage: `url(${exp})`}}>
                <ExperienceBox number="+5" title="Years" />
                <ExperienceBox number="+20" title="Projects" style={{ backgroundColor: "#f64c08" }} />
                <ExperienceBox number="+10000" title="Lines of code" />
            </div>
        </Element>
    );
}

export default Experience;
