import './Education.css';
import { useContext } from "react";
import { themeContext } from "../../Context";

export default function Education(){
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="education" id='Education'>
            <div className="degree">
                <div className="circle">80.8%</div>
                <span style={{ color: darkMode ? "white" : "" }}>Bachelor</span>
                <span>Computer Application</span>
            </div>
            <div className="degree">
                <div className="circle">83.2%</div>
                <span style={{ color: darkMode ? "white" : "" }}>Masters</span>
                <span>Computer Application</span>
            </div>
        </div>
    )
} 