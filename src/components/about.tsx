import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <div>
            <Link id='nav' to='/'>Home</Link>
            <h3>Hello! Welcome to my first full-stack project!</h3>
            <footer>Contact me at quintinrg@protonmail.com</footer>
        </div>
    )
}

export default About