import './Skills.css';
import javascriptLogo from '../../img/javascriptLogo.png';
import kubernatesLogo from '../../img/kubernatesLogo.png';
import reactLogo from '../../img/reactLogo.png';
import swaggerLogo from '../../img/swaggerLogo.png';
import Card from '../Card/Card';

export default function Skills() {
    return (
        <div className="skills">
            {/* {left side} */}
            <div className="awesome">
                <span>My Technical</span>
                <span>Skills</span>
                <span>These are the tech stack I worked on till now !</span>
                <button className="button s-button">Download Resume</button>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
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
                    description={'FastAPI, Angular, React, Bootstrap, Plasm'}
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
            </div>
        </div>      
    )
}