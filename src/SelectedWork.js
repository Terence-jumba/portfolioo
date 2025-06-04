import React from 'react';
import './SelectedWork.css';
import poo from './poo.jpg';
import kifarutea from './tea.png';
import sonovia from './sono.png';
import emox from './emox.png';
import echotales from './echo.png';
import fashion from './fashion.png';
import park from './park.png';
import bitebox from './bitebox.png';

function SelectedWork() {

    const works = [
        {
            image: sonovia,
            name: "SONOVIA",
            type: "UI DESIGN",
            platform: "MOBILE DEV",
            year: "2021"
        },
        {
            image: fashion,
            name: "KYNTHRIFTS",
            type: "UI DESIGN",
            platform: "WEB DEV",
            year: "2023"
        },
         {
            image: echotales,
            name: "ECHOTALES",
            type: "UI DESIGN",
            platform: "WEB DEV",
            year: "2024"
        },
        {
            image: park,
            name: "JENGAPARKING",
            type: "UI DESIGN",
            platform: "WEB DEV",
            year: "2025"
        },
        {
            image: kifarutea,
            name: "KIFARU TEA",
            type: "UI DESIGN",
            platform: "WEB DEV",
            year: "2023"
        },
         {
            image: emox,
            name: "EMOX",
            type: "UI DESIGN",
            platform: "WEB DEV",
            year: "2023"
        }
    ]

    return (
        <section className="selected-work">
            <div className="header">
                <h2>Selected work</h2>
                <button className="see-all">See All</button>
            </div>

            <div className="work-grid">
                <div className="work-card large">
                    <img src={bitebox} alt="Work 1" className="work-imagee" />
                    <div className="info">
                        <p>BITEBOX</p>
                        <span className="year">2021</span>
                        <div className="tags">
                            <span className="tag active">UI DESIGN</span>
                            <span className="tag">MOBILE DEV</span>
                        </div>
                    </div>

                </div>

                {works.map((work, index) => (

                    <div className="work-card">
                        <img src={work.image} alt="Work 3" className="work-image" />
                        <div className="info">
                            <p>{work.name}</p>
                            <div className="tags">
                                <span className="tag active">{work.type}</span>
                                <span className="tag">{work.platform}</span>
                            </div>
                        </div>
                        <span className="year">{work.year}</span>
                    </div>

                ))}

            </div>
        </section>
    );
}

export default SelectedWork;