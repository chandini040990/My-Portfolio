import React from 'react';
import './TopContainer.css';
import TopContent from '../TopContent/TopContent';
import photo from './photo.webp';
import { Element } from 'react-scroll';

const TopContainer = () => {
    return (
        <Element name="about" className='topContainer'style={ {backgroundImage: `url(${photo})`}}>
            <TopContent />
        </Element>
    );
}

export default TopContainer;
