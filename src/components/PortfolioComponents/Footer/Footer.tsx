import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-social">
                <ul className="socials">
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
            <div className="copyright">Copyright</div>
        </div>
    );
}

export default Footer;
