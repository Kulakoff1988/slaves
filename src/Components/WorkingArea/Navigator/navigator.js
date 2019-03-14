import React from 'react';
import Kinds from './kindOfLife';
import './navigator.css'

class Navigator extends React.Component {
    state = {
        Humans: () => alert (`humans pushed`),
        Elfs: () => alert (`elfs pushed`),
        Orcs: () => alert (`orcs pushed`),
        Trolls: () => alert (`trolls pushed`),
        Gnomes: () => alert (`gnomes pushed`),
        Ogres: () => alert (`ogres pushed`),
        Protos: () => alert (`protos pushed`)
    }
    render() {
        return (
            <div className="navigator">
                {Kinds.map(kind => <div onClick={this.state[kind]} className="kindOfLife" key={kind} id={kind}>{kind}</div>)}
            </div>
        )
    }
};

export default Navigator;