import React from 'react';
import './Esper.scss';
import coffee from './images/portfolio/coffee.jpg';
import console from './images/portfolio/console.jpg';
import farmerboy from './images/portfolio/farmerboy.jpg';
import girl from './images/portfolio/girl.jpg';
import judah from './images/portfolio/judah.jpg';
import origami from './images/portfolio/origami.jpg';
import retrocam from './images/portfolio/retrocam.jpg';

function Esper() {
    return (
        <div className="portfolio">
            <div className="opis-prac">
                <h1>Check Out Some of My Works.</h1>
            </div>
            <div className="zdjecia">
                <div className="container">
                    <a href="#" title="">
                        <img alt="" className="image" src={coffee} />
                        <div className="middle">
                            <div className="text">
                                <div className="textin">
                                    <h1>Coffee</h1>
                                    <h2>Eating</h2>
                                </div>
                                <div className="demo-icon">
                                    <i className="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="container">
                    <a href="#" title="">
                        <img alt="" className="image" src={console} />
                        <div className="middle">
                            <div className="text">
                                <div className="textin">
                                    <h1>Console</h1>
                                    <h2>Gaming</h2>
                                </div>
                                <div className="demo-icon">
                                    <i className="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="container">
                    <a href="#" title="">
                        <img alt="" className="image" src={farmerboy} />
                        <div className="middle">
                            <div className="text">
                                <div className="textin">
                                    <h1>Farmerboy</h1>
                                    <h2>Vechicles</h2>
                                </div>
                                <div className="demo-icon">
                                    <i className="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="container">
                    <a href="#" title="">
                        <img alt="" className="image" src={girl} />
                        <div className="middle">
                            <div className="text">
                                <div className="textin">
                                    <h1>Girl</h1>
                                    <h2>People</h2>
                                </div>
                                <div className="demo-icon">
                                    <i className="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="container">
                    <a href="#" title="">
                        <img alt="" className="image" src={girl} />
                        <div className="middle">
                            <div className="text">
                                <div className="textin">
                                    <h1>Girl</h1>
                                    <h2>People</h2>
                                </div>
                                <div className="demo-icon">
                                    <i className="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="container">
                    <a href="#" title="">
                        <img alt="" className="image" src={judah} />
                        <div className="middle">
                            <div className="text">
                                <div className="textin">
                                    <h1>Judah</h1>
                                    <h2>Living</h2>
                                </div>
                                <div className="demo-icon">
                                    <i className="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="container">
                    <a href="#" title="">
                        <img alt="" className="image" src={origami} />
                        <div className="middle">
                            <div className="text">
                                <div className="textin">
                                    <h1>Origami</h1>
                                    <h2>Hobby</h2>
                                </div>
                                <div className="demo-icon">
                                    <i className="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="container">
                    <a href="#" title="">
                        <img alt="" className="image" src={retrocam} />
                        <div className="middle">
                            <div className="textin">
                                <h1>Retrocam</h1>
                                <h2>Photography</h2>
                            </div>
                            <div className="demo-icon">
                                <i className="fas fa-plus"></i>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Esper;
