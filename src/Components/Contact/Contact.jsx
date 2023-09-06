import './Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useContext } from "react";
import { themeContext } from "../../Context";


export default function Contact() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        
        // As I didnt configure this in the emailjs itself, I added a hack to display the text on button click (click handler).
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
            setDone(true);
          form.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    function clickHandler(){
        setDone(true);
    }

    return (
        <div className="contact">
            <div className="c-left">
                <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
                <span>Contact Me</span>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
            {/* <form> */}
                <input type="text" name="user_name" className="user"  placeholder="Name"/>
                <input type="email" name="user_email" className="user" placeholder="Email"/>
                <textarea name="message" className="user" placeholder="Message"/>
                <input type="submit" value="Send" className="button" onClick={clickHandler}/>
                <span>{done && "Thanks for Contacting me !"}</span>
                <div className="blur c-blur2" style={{ background: "var(--purple)" }}
                ></div>
            </form>
            </div>
        </div>
    )
}