import React from 'react';

export default function NavBar(props) {
    return (
            <div className="outer">
                <div className="nav-wrapper">
                    <button className="btn draw-border-one" href="/">ABOUT ME</button>
                    <button className="btn draw-border-two">PROJECTS</button>
                    <button className="btn draw-border-three">RESUME</button>
                </div>
            </div>
    );
}
