import './Experience.css';
import smsDigitalLogo from '../../img/smsDigitalLogo.png'
import smsGroupLogo from '../../img/smsGroupLogo.png'
import shopify from '../../img/Shopify.png';
import facebook from '../../img/Facebook.png';
import amazon from '../../img/amazon.png';
import {useContext} from "react";
import {themeContext} from "../../Context";
import {motion} from "framer-motion";
import {Link} from 'react-scroll';

export default function Experience() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="exp" id='Experience'>
            {/* Left side */}
            <div className="awesome">
                <span style={{color: darkMode ? "white" : ""}}>Experience</span>
                <span>Company and Clients</span>
                <span>
                        <span className='companyName' style={{color: darkMode ? "white" : ""}}> 🏢 SMS Digital :</span>
                        <span className='Domain'>Backend</span>
                        <ul className='domain-list'>
                            <li>Responsible for developing RESTAPI`s endpoints.</li>
                            <li>Responsible for creating UI for the new widgets (features).</li>
	                        <li>Implemented state management using Mobx (React) and Ngrx (Angular).</li>
	                        <li>Maintained and managed the project with Scrum/Agile & Continuous Integration implementation.</li>
                            <li>Implementation of an application using Material UI, Angular material & Plasma UI framework.</li>
	                        <li>Handling and transformation of the large data set to display it on the UI. </li>
                            <li>Deploying Frontend using Open Lens Kubernetes.</li>
	                        <li>Created stateless, stateful & reusable UI components using React & Angular.</li>
	                        <li>Understanding of DOM(Document Object Model).</li>
	                        <li>Creation of Dashboards by implementing panels using Grafana for data visualization. </li>
	                        <li>Configuration of Kubernates, and Prometheus for gathering real-time metrics data from various exporters.</li>
                        </ul>
                        <span className='Domain'>Frontend</span>
                        <ul className='domain-list'>
                            <li>Responsible for developing RESTAPI`s endpoints using FastAPI.</li>
                            <li>Implemented Linters, and made files.</li>
                            <li>Dockerized linters, Jenkins & application setup.</li>
                            <li>Implemented & maintained alembic revision for DB migration.</li>
                            <li>Responsible for setting up applications from scratch in the required environment.</li>
                            <li>Implemented Redis service modules & maintained Dependency Injection.</li>
                            <li>Created Architectural Decision Records.</li>
                        </ul>
                    </span>
                <Link to="Contact" spy={true} smooth={true}>
                    <button className="button s-button">Hire Me</button>
                </Link>

                <div className="s-blur1 blur " style={{background: "#ABF1FF94"}}>nkkkjnkjnkjnknkjn</div>
            </div>
            {/* Right side */}
            <div className="e-right">
                {/* animation */}
                <motion.div initial={{rotate: 45}} whileInView={{rotate: 0}} viewport={{margin: "-40px"}}
                            transition={{duration: 3, type: "spring"}} className="e-mainCircle">
                    {/* <div className="e-mainCircle"> */}
                    <div className="e-secCircle">
                        <img src={smsDigitalLogo} alt=""/>
                    </div>
                    <div className="e-secCircle">
                        <img src={smsGroupLogo} alt=""/>
                    </div>
                    <div className="e-secCircle">
                        <img src={shopify} alt=""/>
                    </div>
                    <div className="e-secCircle">
                        <img src={facebook} alt=""/>
                    </div>
                    <div className="e-secCircle">
                        <img src={amazon} alt=""/>
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