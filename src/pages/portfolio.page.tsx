import {
    Aboutme,
    Education,
    Esper,
    Footer,
    Header,
    Infos,
    NavB,
} from '@components/PortfolioComponents';
import React from 'react';
import './home.page.scss';

const PortfolioPage = () => {
    return (
        <div className="App">
            <NavB />
            <Header />
            <Aboutme />
            <Education />
            <Esper />
            <Infos />
            <Footer />
        </div>
    );
};

export default PortfolioPage;
