import React, { useEffect, useState } from 'react';
import './BookingCall.css';

function BookingCall({ className = '' }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState('');
    const [date, setDate] = useState('');

    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && !isSubmitting) {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, isSubmitting]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const selectedDate = formData.get('date');
        const selectedTime = formData.get('time');
        const email = formData.get('email');

        const submissionNow = new Date();
        const submissionToday = `${submissionNow.getFullYear()}-${String(submissionNow.getMonth() + 1).padStart(2, '0')}-${String(submissionNow.getDate()).padStart(2, '0')}`;
        const submissionTime = `${String(submissionNow.getHours()).padStart(2, '0')}:${String(submissionNow.getMinutes()).padStart(2, '0')}`;
        if (selectedDate < submissionToday || (selectedDate === submissionToday && selectedTime < submissionTime)) {
            setStatus('Please choose a future date and time.');
            return;
        }

        setIsSubmitting(true);
        setStatus('');

        try {
            const response = await fetch('https://formsubmit.co/ajax/terencejumba@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    date: selectedDate,
                    time: selectedTime,
                    email,
                    _subject: 'Portfolio call booking request'
                })
            });
            const responseText = await response.text();
            let result = {};
            try {
                result = JSON.parse(responseText);
            } catch {
                console.error('FormSubmit returned a non-JSON response:', responseText);
            }

            if (!response.ok || result.success === false || result.success === 'false') {
                throw new Error(result.message || result.error || `Email service returned HTTP ${response.status}.`);
            }

            form.reset();
            setDate('');
            setStatus('Thanks, your call request has been sent.');
        } catch (error) {
            console.error('Call booking submission failed:', error);
            setStatus(error instanceof Error ? error.message : 'Your request could not be sent. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <button
                className={className}
                type="button"
                onClick={() => {
                    setStatus('');
                    setIsOpen(true);
                }}
            >
                Book a call
            </button>
            {isOpen && (
                <div
                    className="booking-dialog-backdrop"
                    onClick={(event) => {
                        if (event.target === event.currentTarget && !isSubmitting) {
                            setIsOpen(false);
                        }
                    }}
                >
                    <section
                        className="booking-dialog"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="booking-dialog-title"
                    >
                        <button
                            className="booking-dialog-close"
                            type="button"
                            aria-label="Close booking dialog"
                            disabled={isSubmitting}
                            onClick={() => setIsOpen(false)}
                        >
                            &times;
                        </button>
                        <h2 id="booking-dialog-title">Book a call</h2>
                        <p>Choose a date and time, and share your email so I can get back to you.</p>
                        <form className="booking-form" onSubmit={handleSubmit}>
                            <label htmlFor="booking-date">Date</label>
                            <input
                                id="booking-date"
                                name="date"
                                type="date"
                                min={today}
                                value={date}
                                onChange={(event) => {
                                    setDate(event.target.value);
                                    setStatus('');
                                }}
                                required
                            />
                            <label htmlFor="booking-time">Time</label>
                            <input
                                id="booking-time"
                                name="time"
                                type="time"
                                min={date === today ? currentTime : undefined}
                                required
                            />
                            <label htmlFor="booking-email">Email</label>
                            <input id="booking-email" name="email" type="email" autoComplete="email" required />
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send request'}
                            </button>
                            <p className="booking-status" role="status" aria-live="polite">{status}</p>
                        </form>
                    </section>
                </div>
            )}
        </>
    );
}

export default BookingCall;
