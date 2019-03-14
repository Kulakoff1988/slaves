import React from 'react';
import './workingArea.css'
import Navigator from './Navigator/navigator';
import Maincontent from './Maincontent/maincontent';

class workingArea extends React.Component {
    render() {
        return (
            <div className="workingArea">
                <Navigator />
                <Maincontent />
            </div>
        )
    }
};

export default workingArea;