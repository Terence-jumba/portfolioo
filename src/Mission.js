import React from 'react';
import './Mission.css';


function Mission() {
    return (
        <div className="missioncontainer">
            <p className="missiontext">
                My mission is to assist startups and enterprises in
                creating an emotional bond between their products and
                satisfied, engaged customers.
            </p>
            <div className="logos">
                <span>Jeep</span>
                <span>amazon</span>
                <span>bitcoin</span>
                <span>HubSpot</span>
                <span>stripe</span>
                <span>Google</span>
            </div>
        </div>
    );
}

export default Mission;