"use client";
import "./contact.css";
import ContactForm  from '../components/contact-form/contactForm.js';

export default function Page(){
    return (
        <div className="contact-page">
            <div className="contact-form">
                <ContactForm/>
            </div>
        </div>
    );
}