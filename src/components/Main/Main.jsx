import React from 'react';
import Advantage from './Advantage/Advantage';
import Page from './Page/Page';
import Partners from './Partners/Partners';
import WideServices from './Wide-services/Wide-services';

const Main = () => {
    return (
        <main className="main-content">
            <Page/>
            <WideServices/>
            <Advantage/>
            <Partners/>
		</main>
    );
}

export default Main;