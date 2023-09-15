import './Projects.css';
import {Swiper, SwiperSlide} from 'swiper/react'
import bankApp from '../../img/bankistApp.png';
import ajaxApp from '../../img/ajaxApp.png'; 
import diceGame from '../../img/diceGame.png';
import guessGanme from '../../img/guessGame.png';
import inputApp from '../../img/inputApp.png';
import mobxApp from '../../img/mobxApp.png';
import reduxAuth from '../../img/reduxAuth.png';
import reduxCounter from '../../img/reduxCounterApp.png';
import Portfolio from '../../img/portfolio.png';
import todoApp from '../../img/todoApp.png';
import expenseTrackerApp from '../../img/expenseTrackerApp.png'
import 'swiper/css';
import { useContext } from "react";
import { themeContext } from "../../Context";

export default function Projects(){
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='projects' id='Projects'>
            {/* Heading */}
            <span style={{ color: darkMode ? "white" : "" }}>Recent Developed</span>
            <span>Projects</span>
            {/* Swiper */}
            <Swiper spaceBetween={30}
                    slidesPerView={3}
                    grabCursor={true}
                    className="projects-slider"
            >
                <SwiperSlide>
                    <img src={Portfolio} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://bankist-application-lr.netlify.app/" target='_blank' rel="noreferrer"><img src={bankApp} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://ajax-call-lr.netlify.app/" target='_blank' rel="noreferrer"><img src={ajaxApp} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://dice-game-lr.netlify.app/" target='_blank' rel="noreferrer"><img src={diceGame} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://expense-tracker-application-lr.netlify.app/" target='_blank' rel="noreferrer"><img src={expenseTrackerApp} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://guess-my-number-lr.netlify.app/" target='_blank' rel="noreferrer"><img src={guessGanme} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://add-user-with-error-popup-lr.netlify.app/" target='_blank' rel="noreferrer"><img src={inputApp} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://react-mobx-counter-lr.netlify.app/" target='_blank' rel="noreferrer"><img src={mobxApp} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://reduxjs-toolkit-counter-auth-lr.netlify.app/" target='_blank' rel="noreferrer"><img src={reduxAuth} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://redux-counter-lr.netlify.app/" target='_blank' rel="noreferrer"><img src={reduxCounter} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://react-to-do-app-lr.netlify.app/" target='_blank' rel="noreferrer"><img src={todoApp} alt="" /></a>
                </SwiperSlide>
            </Swiper>

        </div>
    )
} 