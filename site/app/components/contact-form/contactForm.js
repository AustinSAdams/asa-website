"use client";
import "./contactForm.css";
import { useState } from 'react';
import { sendEmailToFirebase } from '@/app/api/firebase/firebase';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const timestamp = new Date().toISOString();
        const emailData = { name, email, message, timestamp };

        setIsSubmitting(true);
        try {
            await sendEmailToFirebase(emailData);
            setName('');
            setEmail('');
            setMessage('');

            setEmailSent(true);
        } catch (err) {
            setErrorMessage(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="formContainer">
                <div className="form-group">
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="form-inputField"
                        placeholder=" " /* Trigger for floating label */
                    />
                    <label htmlFor="name" className="form-label">Name</label>
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-inputField"
                        placeholder=" "
                    />
                    <label htmlFor="email" className="form-label">Email</label>
                </div>

                <div className="form-group">
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows="4"
                        className="form-textareaField"
                        placeholder=" "
                    />
                    <label htmlFor="message" className="form-label">Message</label>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="form-submitButton"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
            {errorMessage && (
                <p
                    className="form-error"
                >{errorMessage}</p>
            )}
            {emailSent && (
                <p
                    className="form-success"
                >Email Sent!</p>
            )}
        </div>
    );
}