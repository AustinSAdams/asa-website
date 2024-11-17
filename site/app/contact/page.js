"use client";
import "./contact.css";
import ContactForm  from '../components/contact-form/contactForm.js';

export default function Page(){
    return (
        <div className="contact-page">
            <div className="info-container">
                <p>For direct contact, please fill out the form below with your name, email, and a brief message! I try to respond to all messages within 2-3 business days.</p> 
                <hr style={{border: "none", borderTop: "4px solid black",}}/>
                <p>Otherwise, please feel free to add my socials found in the top right corner of the header panel. You can always message me directly through my socials!</p>

            </div>
            <div className="contact-form">
                <ContactForm/>
            </div>
        </div>
    );
}