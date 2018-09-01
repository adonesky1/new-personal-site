import React from 'react';
import '../../dist/styles.scss'


export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
             <div className="wrapper">
                <div className="text">
                    <span className="r"> Hey I'm Alex</span>  
                    <span className="g"> Hey I'm Alex</span>  
                    <span className="b"> Hey I'm Alex</span>
                        
                </div>
                <div className="btn-wrapper">
                    <div className="btn-wrapper__container">
                        <div className="btn-inner">
                            <a className="btn-inner__text" href="/Projects">My Work</a>
                        </div>
                    </div>
                </div>
             </div>   
        );
    }
}
