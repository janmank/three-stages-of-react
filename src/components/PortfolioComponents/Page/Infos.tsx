import React from 'react';
import './Infos.scss';
import Submit from '../Submit/Submit';

function Infos() {
    return (
        <div className="contact">
            <div className="gora-contact">
                <div className="left-contact">
                    <i className="fas fa-envelope fa-5x"></i>
                </div>
                <div className="right-contact">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                </div>
            </div>
            <div className="dol-contact">
                <div className="wysylanie">
                    <Submit />
                </div>
                <div className="tweets">
                    <div className="adress-contact">
                        <h4>Address and Phone</h4>
                        <h3 className="address">
                            Asdfg Zxcvb
                            <br />
                            Qwerty
                            <br />
                            Poiuy
                            <br />
                            <span>(123) 456-7890</span>
                        </h3>
                    </div>
                    <div className="tweets-contact">
                        <div>
                            <h4>Lastest Tweets</h4>
                            <p className="twetts-news">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                <div className="link-con">
                                    <a href="#">http://t.co/CGIrdxIlI3</a>
                                </div>
                                <div className="days-gone">
                                    <a href="#">2 Days Ago</a>
                                </div>
                            </p>
                        </div>
                        <div>
                            <p className="twetts-news">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                <div className="link-con">
                                    <a href="#">http://t.co/CGIrdxIlI3</a>
                                </div>
                                <div className="days-gone">
                                    <a href="#">3 Days Ago</a>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Infos;
