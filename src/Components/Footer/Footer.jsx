import './Footer.css';
import Wave from '../../img/wave.png';

import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';
import StackoverFooter from '../../img/stackoverFooter.png';


export default function Footer(){
    return(
        <div className="footer">
            <img src={Wave} alt="" style={{width: '100%'}}/>
            <div className="f-content">
                <span>@Copyright2023 Lakshay-Rohilla</span>
                <div className="f-icons">
                    <a href='https://github.com/LakshayRohilla' target='_blank' rel="noreferrer"><Github color='white' size='3rem' /></a>
                    {/* <LinkedIn color='white' size='3rem' /> */}
                    <a href="https://www.linkedin.com/in/lakshay-rohilla-02a23a119/" target='_blank' rel="noreferrer"><LinkedIn color='white' size='3rem'/></a>
                    <a href="https://stackoverflow.com/users/16876542/lakshay-rohilla" target='_blank' rel="noreferrer"><img src={StackoverFooter} alt="LinkedIn" className='sicon'/></a>
                </div>
            </div>
        </div>
    )
} 