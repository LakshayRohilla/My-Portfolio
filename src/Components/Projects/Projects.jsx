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
import todoApp from '../../img/todoApp.png';
import 'swiper/css';

export default function Projects(){
    return (
        <div className='projects'>
            {/* Heading */}
            <span>Recent Developed</span>
            <span>Projects</span>
            {/* Swiper */}
            <Swiper spaceBetween={30}
                    slidesPerView={3}
                    grabCursor={true}
                    className="projects-slider"
            >
                <SwiperSlide>
                    <a href="https://bankist-application-lr.netlify.app/" target='_blank'><img src={bankApp} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://ajax-call-lr.netlify.app/" target='_blank'><img src={ajaxApp} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://dice-game-lr.netlify.app/" target='_blank'><img src={diceGame} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://guess-my-number-lr.netlify.app/" target='_blank'><img src={guessGanme} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://add-user-with-error-popup-lr.netlify.app/" target='_blank'><img src={inputApp} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://react-mobx-counter-lr.netlify.app/" target='_blank'><img src={mobxApp} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://reduxjs-toolkit-counter-auth-lr.netlify.app/" target='_blank'><img src={reduxAuth} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://redux-counter-lr.netlify.app/" target='_blank'><img src={reduxCounter} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://react-to-do-app-lr.netlify.app/" target='_blank'><img src={todoApp} alt="" /></a>
                </SwiperSlide>
            </Swiper>

        </div>
    )
} 