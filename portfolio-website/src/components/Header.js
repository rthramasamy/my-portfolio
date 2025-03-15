import React from 'react';
import './Header.css'; // Assuming you have a separate CSS file for header styles

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__name">Your Name</h1>
            <nav className="header__nav">
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;