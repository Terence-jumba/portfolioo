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
                    <a className="bubble" href="https://www.instagram.com/zeroday_coder/">
                        INSTAGRAM
                    </a>
                    <div className="bubble">DRIBBBLE</div>
                    <div className="bubble">BEHANCE</div>
                    <a className="bubble" href="https://www.linkedin.com/in/terencejumba">
                        LINKEDIN
                    </a>
                </div>


            </div>
            <footer className="footer">
                <div className="footer-left">
                    <div className="logo">TJ</div>
                    <span>TerenceJumba</span>
                </div>
                <div className="footer-center">©2026</div>
                <div className="footer-right">
                    <button className="call-button">Book a call</button>
                </div>
            </footer>
        </div>
    );
}

export default Socials;
