import React from 'react';
import './Socials.css';


function Socials() {
    return (
        <div>
            <div className="container">
                <div className="left">
                    <h1>Let’s <br />connect <br />and chat</h1>
                    <a href="mailto:hello@cozy.com" className="email-button">
                        HELLO@TERENCE.COM <span className="arrow">↗</span>
                    </a>
                </div>

                <div className="right">
                    <div className="bubble">FOLLOW ME!</div>
                    <div className="bubble">👀 🤩</div>
                    <div className="bubble">INSTAGRAM</div>
                    <div className="bubble">DRIBBBLE</div>
                    <div className="bubble">BEHANCE</div>
                    <div className="bubble">LINKEDIN</div>
                </div>


            </div>
            <footer className="footer">
                <div className="footer-left">
                    <div className="logo">TJ</div>
                    <span>TerenceJumba</span>
                </div>
                <div className="footer-center">©2025</div>
                <div className="footer-right">
                    <button className="call-button">Book a call</button>
                </div>
            </footer>
        </div>
    );
}

export default Socials;
