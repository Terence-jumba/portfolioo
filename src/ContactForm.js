import React, { useState } from "react";
import "./ContactForm.css";


function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const name = formData.get("name");

        setIsSubmitting(true);
        setStatus("");

        try {
            const response = await fetch("https://formsubmit.co/ajax/terencejumba@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name,
                    email: formData.get("email"),
                    message: formData.get("message"),
                    _subject: `Portfolio contact from ${name}`
                })
            });
            const responseText = await response.text();
            let result = {};
            try {
                result = JSON.parse(responseText);
            } catch {
                console.error("FormSubmit returned a non-JSON response:", responseText);
            }

            if (!response.ok || result.success === false || result.success === "false") {
                throw new Error(result.message || result.error || `Email service returned HTTP ${response.status}.`);
            }

            form.reset();
            setStatus("Thanks, your message has been sent.");
        } catch (error) {
            console.error("Contact form submission failed:", error);
            setStatus(error instanceof Error ? error.message : "Your message could not be sent. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-container">
            <h1>Contact with me to sizzle your project</h1>
            <p>
                Feel free to contact me if having any questions. I'm available for new
                projects or just for chatting.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" name="name" placeholder="Name" autoComplete="name" required />
                    <input type="email" name="email" placeholder="Email" autoComplete="email" required />
                </div>
                <textarea name="message" placeholder="Work Description..." rows="6" required />
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Submit"}
                </button>
                <p className="contact-status" role="status" aria-live="polite">{status}</p>
            </form>
        </div>
    );
}

export default ContactForm;