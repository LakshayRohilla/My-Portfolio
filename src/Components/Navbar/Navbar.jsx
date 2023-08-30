import React from "react";
import "./Navbar.css"

export default function Navbar() {
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">
                    Lakshay
                </div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                        <li>Home</li>
                        <li>Skills</li>
                        <li>Experience</li>
                        <li>Education</li>
                        <li>Projects</li>
                        <li>Certificates</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact 
                </button>
            </div>
        </div>
    )
}


