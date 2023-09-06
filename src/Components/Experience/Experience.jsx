import './Experience.css';
import smsDigitalLogo from '../../img/smsDigitalLogo.png'
import smsGroupLogo from '../../img/smsGroupLogo.png'
import shopify from '../../img/Shopify.png';
import facebook from '../../img/Facebook.png';
import amazon from '../../img/amazon.png';
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

export default function Experience(){
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="exp" id='Experience'>
            {/* Left side */}
                <div className="awesome">
                    <span style={{ color: darkMode ? "white" : "" }}>Experience</span>
                    <span>Company and Clients</span>
                    <span>
                        <span className='companyName' style={{ color: darkMode ? "white" : "" }}> 🏢 SMS Digital :</span>
                        <span className='Domain'>Backend</span>
                        <ul className='domain-list'>
                        <li>Workdone - 1</li>
                            <li>Workdone - 2</li>
                            <li>Workdone - 3</li>
                        </ul>
                        <span className='Domain'>Frontend</span>
                        <ul className='domain-list'>
                            <li>Workdone - 1</li>
                            <li>Workdone - 2</li>
                            <li>Workdone - 3</li>
                        </ul>
                    </span>
                    <button className="button s-button">Hire Me</button>
                    
                    <div className="s-blur1 blur " style={{ background: "#ABF1FF94" }}>nkkkjnkjnkjnknkjn</div>
                </div>
            {/* Right side */}
            <div className="e-right">
                {/* animation */}
                <motion.div initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-40px" }} transition={{ duration: 3, type: "spring" }}className="e-mainCircle">
                {/* <div className="e-mainCircle"> */}
                    <div className="e-secCircle">
                        <img src={smsDigitalLogo} alt="" />
                    </div>
                    <div className="e-secCircle">
                        <img src={smsGroupLogo} alt="" />
                    </div>
                    <div className="e-secCircle">
                        <img src={shopify} alt="" />
                    </div>
                    <div className="e-secCircle">
                        <img src={facebook} alt="" />
                    </div>
                    <div className="e-secCircle">
                        <img src={amazon} alt="" />
                    </div>
                {/* </div> */}
                </motion.div>
                {/* background Circles */}
                <div className="e-backCircle blueCircle"></div>
                <div className="e-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}