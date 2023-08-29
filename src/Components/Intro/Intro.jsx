import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/lakshay1.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';

export default function Intro(){
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hey! I Am</span>
                    <span>Lakshay Rohilla</span>
                    <span>Frontend Developer with high level of experience in web designing
            and development, producting the Quality work </span>
                </div>
                <button className="button i-button">Hire me</button>
                    <div className="i-icons">
                        <a href='https://github.com/LakshayRohilla'><img src={Github} alt="Github" /></a>
                        <a href="https://www.linkedin.com/in/lakshay-rohilla-02a23a119/"><img src={LinkedIn} alt="LinkedIn" /></a>
                        <img src={Instagram} alt="Github" />
                    </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesimoji} alt="" />
                <div style={{top:'-4%', left:'68%'}}>
                    <FloatingDiv image={crown} txt1="Web" txt2="Developer"/> 
                </div>
                <div style={{top:'18rem', left:'0rem'}}>
                    <FloatingDiv image={thumbup} txt1="An Open" txt2="Book !"/> 
                </div>
                {/* Blur divs behind the right side*/}
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div className="blur" style={{ background: "#C1F5FF", top: "17rem", width: "21rem", height: "11rem", left: "-9rem" }}></div>
            </div>
        </div>
    )
}