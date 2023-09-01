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
                    <img src={bankApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ajaxApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={diceGame} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={guessGanme} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={inputApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={mobxApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={reduxAuth} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={reduxCounter} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={todoApp} alt="" />
                </SwiperSlide>
            </Swiper>

        </div>
    )
} 