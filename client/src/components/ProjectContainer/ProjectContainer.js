import React from 'react';
import './ProjectContainer.css';
import Project from '../Project/Project';
import { Element } from 'react-scroll';

const ProjectContainer = () => {

    const projects = [
        {
            img: "./images/project.webp",
            title: "Online Vehicle Rental System",
            link: "https://online-vehicle-rental-systemss.netlify.app/"
        },
        {
            img: "./images/project.webp",
            title: "Password Reset Project",
            link: "https://chand-password-reset.netlify.app"
        },
        {
            img: "./images/project.webp",
            title: "Student Management System",
            link: "https://chand2-studentmgmt.netlify.app"
        },
        {
            img: "./images/project.webp",
            title: "Shopping Cart",
            link: "https://chand-add-to-cart.netlify.app"
        },
        {
            img: "./images/project.webp",
            title: "User Management",
            link: "https://chand-user-management.netlify.app"
        }

    ]

    return (
        <Element id="projects" className='projectContainer'>
            <h1>Projects</h1>
            <p>
                Here are some projects which i have created.
            </p>
            <div className='projectContainer_projects'>
                {
                    projects.map((project, index) => {
                        return (
                            <Project key={index} img={project.img} title={project.title} link={project.link} />
                        )
                    }

                    )
                }
            </div>


        </Element>
    );
}

export default ProjectContainer;
