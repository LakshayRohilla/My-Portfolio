import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

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
                This is the right !!
            </div>
        </div>
    )
}