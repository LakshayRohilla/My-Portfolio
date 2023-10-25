import './Skills.css';
import javascriptLogo from '../../img/javascriptLogo.png';
import kubernatesLogo from '../../img/kubernatesLogo.png';
import reactLogo from '../../img/reactLogo.png';
import swaggerLogo from '../../img/swaggerLogo.png';
import Card from '../Card/Card';
import Resume from './Lakshay-Rohilla-Resume-2023.pdf';
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

export default function Skills() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
    // transition
    const transition = { duration: 1, type: "spring"};

    return (
        <div className="skills" id='Skills'>
            {/* {left side} */}
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>Technical</span>
                <span>Skills</span>
                <span>These are the tech stack I worked on till now !</span>
                <a href={Resume} download>
                    <button className="button s-button">Download Resume</button>
                </a>
                <div className="s-blur1 blur " style={{ background: "#ABF1FF94" }}>nkkkjnkjnkjnknkjn</div>
            </div>
            {/* {right side} */}
            <div className="cards">
                <motion.div initial={{ left: "25rem" }} whileInView={{ left: "14rem" }} transition={transition} className="floating-div">
                {/* <div style={{left: '14rem'}}> */}
                    <Card 
                    image={javascriptLogo} 
                    heading={'Languages'} 
                    description={'JavaScript, Python, SQL, HTML, CSS, Linux/Unix Shell Scripting, Web Services(RESRful)'}
                    />
                {/* </div> */}
                </motion.div>
                <motion.div initial={{ top: "5rem", left: "-11rem" }} whileInView={{ left: "-4rem" }} transition={transition} className="floating-div">
                {/* <div style={{top:"5rem", left: '-4rem'}}> */}
                    <Card 
                    image={reactLogo} 
                    heading={'Frameworks'} 
                    description={'FastAPI, Angular, React, Bootstrap, Plasma'}
                    />
                {/* </div> */}
                </motion.div>
                <motion.div initial={{ top: "18rem", left: "28rem" }} whileInView={{ left: "20rem" }} transition={transition} className="floating-div">
                {/* <div style={{top:"18rem", left: '20rem'}}> */}
                    <Card 
                    image={kubernatesLogo} 
                    heading={'DevOps Tools'} 
                    description={'Kubernates, Git, Docker, Gitea, Bitbucket, Gitlab'}
                    />
                {/* </div> */}
                </motion.div>
                <motion.div initial={{ top: "23rem", left: "-8rem" }} whileInView={{ left: "2rem" }} transition={transition} className="floating-div">
                {/* <div style={{top:"23rem", left: '2rem'}}> */}
                    <Card 
                    image={swaggerLogo} 
                    heading={'Frameworks'} 
                    description={'Jira, Jenkins, Swagger, Postman, Insomnia, Draw.io, Linters, make, poetry, pydantic'}
                    />
                {/* </div>         */}
                </motion.div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>
        </div>      
    )
}