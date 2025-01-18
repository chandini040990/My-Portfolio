import React from 'react';
import './Skill.css';
import { Element } from 'react-scroll';
import LinearProgress from '@material-ui/core/LinearProgress';

const Skill = () => {
    return (
        <Element id="skills" className='skillContainer'>
            <div className='skillContainer_image'>
                <img src="./images/skill.jpeg" alt="skill-img" />
            </div>

            <div className='skillContainer_text'>
                <h2>SKILLSET</h2>
                <div className='skillContainer_skillset'>
                    <h5>React</h5>
                    <div className='skillContainer_slider skillContainer_slider1'>
                        <LinearProgress variant="determinate" value={90} />
                    </div>
                </div>
                <div className='skillContainer_skillset'>
                    <h5>Node JS</h5>
                    <div className='skillContainer_slider skillContainer_slider2'>
                        <LinearProgress variant="determinate" value={80} />
                    </div>
                </div>
                <div className='skillContainer_skillset'>
                    <h5>Express JS</h5>
                    <div className='skillContainer_slider skillContainer_slider3'>
                        <LinearProgress variant="determinate" value={70} />
                    </div>
                </div>
                <div className='skillContainer_skillset'>
                    <h5>MongoDB</h5>
                    <div className='skillContainer_slider skillContainer_slider4'>
                        <LinearProgress variant="determinate" value={65} />
                    </div>
                </div>
                <div className='skillContainer_skillset'>
                    <h5>Mongoose</h5>
                    <div className='skillContainer_slider skillContainer_slider5'>
                        <LinearProgress variant="determinate" value={75} />
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default Skill;
