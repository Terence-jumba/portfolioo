import React from "react";
import "./ContactForm.css";


function ContactForm() {
    return (
        <div className="contact-container">
            <h1>Contact with me to sizzle your project</h1>
            <p>
                Feel free to contact me if having any questions. I'm available for new
                projects or just for chatting.
            </p>
            <form className="contact-form">
                <div className="input-group">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                </div>
                <textarea placeholder="Work Description..." rows="6" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;