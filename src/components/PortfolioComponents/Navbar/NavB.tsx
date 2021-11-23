import React from 'react';
import './NavB.scss';

function NavB() {
    return (
        <div className="navbar-container">
            <ul className="nav-list">
                <li className="nav-list-item">
                    <a href="#home">HOME</a>
                </li>
                <li className="nav-list-item">
                    <a href="#about">ABOUT</a>
                </li>
                <li className="nav-list-item">
                    <a href="#resume">RESUME</a>
                </li>
                <li className="nav-list-item">
                    <a href="#works">WORKS</a>
                </li>
                <li className="nav-list-item">
                    <a href="#testimonials">TESTIMONIALS</a>
                </li>
                <li className="nav-list-item">
                    <a href="#contact">CONTACT</a>
                </li>
            </ul>
        </div>
    );
}

export default NavB;
