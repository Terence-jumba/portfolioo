import lipcare from './lipcare.jpg';
import figma from './figma.png';
import tiktok from './tiktok.png';
import instagram from './instagram.png';
import linkedin from './linkedin.png';
import twitter from './twitter.png';
import facebook from './facebook.png';
import squarespace from './squarespace.png';
import './Home.css';
import React from 'react';
import profilepic from './profilepic.jpg';


function Home() {
    const logos = [
        {
            image: "/squarespace.png",
            title: 'squarespace',
        }
        ,
        {
            image: "/figma.png",
            title: 'figma',
        },
        {
            image: "/pingup.png",
            title: 'pingup',
        },
        {
            image: "/wechat.png",
            title: 'wechat',
        },
        {
            image: "/dropbox.png",
            title: 'dropbox',
        },
        // Add more logos here
    ];
    return (
        <section className="hero">
            <header className="hero-header">
                <div className="logo">TERENCEJUMBA</div>
                <button className="call-btn">Book a call</button>
            </header>

            <div className="hero-body">
                <div className="left-column">
                    <div className="badge">● AVAILABLE FOR WORK</div>
                    <h1>Hi, I’m a<br /><span>software engineer</span><sup>©</sup></h1>
                    <p>Innovative and technically-astute android developer well-versed in analyzing user needs
                        and developing software to precisely meet diverse needs. Demonstrates mastery of
                        multiple programming languages and proactively keeps up with industry trends. Driven to
                        wear many programming hats with expertise in creating everything from new applications
                        to new operating systems.</p>
                    <button className="contact-btn">Contact Us</button>
                </div>

                <div className="right-column">
                    <div className="profile-card">
                        <h3>Terencejumba</h3>
                        <p>Nairobi, Kenya</p>
                        <img src={profilepic} alt="Work preview" className="work-img" />
                        <span className="tag">FRAMER EXPERT</span>
                        <button className="downloadcv-btn">Download cv</button>
                    </div>

                    <div className="profile-pic">
                        <img src={profilepic} alt="Profile" />
                    </div>

                    <div className="brandyy">
                        <div className="brand-slider-container">
                            <p className="brand-slider-title">
                                The most recent brands I happily worked with &lt;3
                            </p>
                            <div className="slider">
                                <div className="slide-track">
                                    {[...logos, ...logos].map((logo, index) => (
                                        <div className="slide" key={index}>
                                            <img src={`${logo.image}`} alt={`brand-${index}`} />
                                            <p>{logo.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sociocont">
                        <div className="social-icons">
                            <i className="fab fa-figma"> <img src={figma} alt="figma" /></i>
                            <i className="fab fa-tiktok"> <img src={tiktok} alt="tiktok" /> </i>
                            <i className="fab fa-linkedin"> <img src={linkedin} alt="linkedin" /></i>
                        </div>
                        <div className="social-icons">
                            <i className="fab fa-instagram"> <img src={instagram} alt="instagram" /></i>
                            <i className="fab fa-behance"> <img src={facebook} alt="facebook" /></i>
                            <i className="fab fa-x-twitter"> <img src={twitter} alt="twitter" /></i>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;