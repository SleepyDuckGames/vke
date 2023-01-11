import React from 'react';
import Certificates from './Certificates/Certificates';
import './Documentation.scss';
import Licenses from './Licenses/Licenses';

const Documentation = () => {
    return (
        <div className="documentation">
            <Licenses/>
            <Certificates/>
		</div>
    );
}

export default Documentation;