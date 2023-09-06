import React from "react";
import "./Navbar.css"
import Toggle from "../Toggle/Toggle";
import {Link} from 'react-scroll';

export default function Navbar() {
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">
                    Lakshay
                </div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                        <li><Link activeClass="activeClass" to='Navbar' spy={true} smooth={true}>Home</Link></li>
                        <li><Link to='Skills' spy={true} smooth={true}>Skills</Link></li>
                        <li><Link to="Experience" spy={true} smooth={true}>Experience</Link></li>
                        <li><Link to="Education" spy={true} smooth={true}>Education</Link></li>
                        <li><Link to="Projects" spy={true} smooth={true}>Projects</Link></li>
                        <li><Link to="Certificates" spy={true} smooth={true}>Certificates</Link></li>
                    </ul>
                </div>
                <button className="button n-button">
                <Link to="Contact" spy={true} smooth={true}>Contact</Link>
                </button>
            </div>
        </div>
    )
}


