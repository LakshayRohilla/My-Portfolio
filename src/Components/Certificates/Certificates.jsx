import './Certificates.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import placeholderCertificate from "../../img/placeholderForImg.png";
import javascriptCertification from '../../img/JavaScriptCertificate.jpg';
import { Pagination } from "swiper/modules";
import 'swiper/css/pagination';
import 'swiper/css';
import { useContext } from "react";
import { themeContext } from "../../Context";


export default function Certificates(){
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    const certificates = [
        {
          img: javascriptCertification,
          review:
            "Complete JavaScript Course - Udemy",
        },
        {
          img: placeholderCertificate,
          review:"Number 2 cerfication title placeholder",
        },
        {
          img: placeholderCertificate,
          review:"Number 3 cerfication title placeholder"
        },
        {
          img: placeholderCertificate,
          review: "Number 4 cerfication title placeholder"
        },
        {
            img: placeholderCertificate,
            review: "Number 5 cerfication title placeholder"
        },
        {
            img: placeholderCertificate,
            review: "Number 6 cerfication title placeholder"
          },
          {
            img: placeholderCertificate,
            review: "Number 7 cerfication title placeholder"
          },
          {
            img: placeholderCertificate,
            review: "Number 8 cerfication title placeholder"
          },
    ];

    return (
        <div className="c-wrapper" id='Certificates'>
            <div className='c-heading'>
                <span style={{ color: darkMode ? "white" : "" }}>Completed</span>
                <span>Certifications</span>
            </div>
            <div className='myBlur'>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>
            
            
            {/* Slider */}
            <Swiper
                // install Swiper modules
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {certificates.map((certificate, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={certificate.img} alt="" />
                            <span>{certificate.review}</span>
                        </div>
                    </SwiperSlide>
                );
                })}
            </Swiper>
        </div>
    )
} 