import React from 'react';
import './Socials.css';


function Socials() {
    return (
        <div className="container">
            <div className="left">
                <h1>Let’s <br />connect <br />and chat</h1>
                <a href="mailto:hello@cozy.com" className="email-button">
                    HELLO@COZY.COM <span className="arrow">↗</span>
                </a>
            </div>
            <div className="right">
                <div className="bubble">FOLLOW ME! 👀 🤩</div>
                <div className="bubble">INSTAGRAM</div>
                <div className="bubble">DRIBBBLE</div>
                <div className="bubble">BEHANCE</div>
                <div className="bubble">LINKEDIN</div>
            </div>
            <footer className="footer">
                <div className="footer-left">
                    <div className="logo">C</div>
                    <span>COZYDIADORA</span>
                </div>
                <div className="footer-center">©2024</div>
                <div className="footer-right">
                    <button className="call-button">Book a call</button>
                </div>
            </footer>
        </div>
    );
}

export default Socials;
