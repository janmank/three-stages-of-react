import React from 'react';
import './Header.scss';

function Header() {
    return (
        <div className="fullFirst">
            <div className="first-cont">
                <h1>Im Jonathan Doe.</h1>
                <h3>
                    Im a Manila based graphic designer, illustrator and webdesigner creating awesome
                    and effective visual identities for companies of all sizes around the globe.
                    Lets start scrolling and learn more about me.
                </h3>
                <hr />
                <ul>
                    <li>
                        <a href="#">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-twitter-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-google-plus-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-instagram-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-dribbble-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-skype"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
