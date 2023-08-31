import './Skills.css';
import javascriptLogo from '../../img/javascriptLogo.png';
import kubernatesLogo from '../../img/kubernatesLogo.png';
import reactLogo from '../../img/reactLogo.png';
import swaggerLogo from '../../img/swaggerLogo.png';
import Card from '../Card/Card';
import Resume from './Resume.pdf';

export default function Skills() {
    return (
        <div className="skills">
            {/* {left side} */}
            <div className="awesome">
                <span>Technical</span>
                <span>Skills</span>
                <span>These are the tech stack I worked on till now !</span>
                <a href={Resume} download>
                    <button className="button s-button">Download Resume</button>
                </a>
                <div className="s-blur1 blur " style={{ background: "#ABF1FF94" }}>nkkkjnkjnkjnknkjn</div>
            </div>
            {/* {right side} */}
            <div className="cards">
                <div style={{left: '14rem'}}>
                    <Card 
                    image={javascriptLogo} 
                    heading={'Languages'} 
                    description={'JavaScript, Python, SQL, HTML, CSS, Linux/Unix Shell Scripting, Web Services(RESRful)'}
                    />
                </div> 
                <div style={{top:"5rem", left: '-4rem'}}>
                    <Card 
                    image={reactLogo} 
                    heading={'Frameworks'} 
                    description={'FastAPI, Angular, React, Bootstrap, Plasma'}
                    />
                </div>    
                <div style={{top:"18rem", left: '20rem'}}>
                    <Card 
                    image={kubernatesLogo} 
                    heading={'DevOps Tools'} 
                    description={'Kubernates, Git, Docker, Gitea, Bitbucket, Gitlab'}
                    />
                </div>  
                <div style={{top:"23rem", left: '2rem'}}>
                    <Card 
                    image={swaggerLogo} 
                    heading={'Frameworks'} 
                    description={'Jira, Jenkins, Swagger, Postman, Insomnia, Draw.io, Linters, make, poetry, pydantic'}
                    />
                </div>        
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>
        </div>      
    )
}