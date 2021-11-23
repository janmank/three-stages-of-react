import React from 'react';
import './Aboutme.scss';
import profilepic from './images/profilepic.jpg';

function Aboutme() {
    return (
        <div className="fullSecond">
            <div className="leftSecond">
                <img className="profile-photo" src={profilepic} />
            </div>
            <div className="rightSecond">
                <div className="higherSection">
                    <h2 className="about">About me</h2>
                    <p className="aboutme">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="lowerSection">
                    <div className="contactSection">
                        <h3 className="contactSecond">Contact Details</h3>
                        <h2 className="address">
                            Jan Man
                            <br />
                            1234 Wroclawska
                            <br />
                            12-345 Wroclaw
                            <br />
                            (123)456-7890
                            <br />
                            anyone@website.com
                        </h2>
                    </div>
                    <div className="downloadSection">
                        <a href="#" className="button">
                            <i className="fa fa-download">Download</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutme;
