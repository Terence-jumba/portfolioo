import React from 'react';
import './Services.css';

function Services() {
    const services = [
        {
            id: '01',
            title: 'UI Design',
            description:
                'We create intuitive, visually appealing interfaces that enhance user experience and navigation, ensuring your app is both beautiful and functional across all devices.',
            icon: '🎨',
        },
        {
            id: '02',
            title: 'Development',
            description:
                'Our team builds reliable, scalable solutions, delivering clean code that powers websites and mobile apps with top-notch performance and security.',
            icon: '💻',
        },
        {
            id: '03',
            title: 'Graphic Design',
            description:
                'We design responsive, user-friendly websites that blend aesthetics with functionality, providing a seamless experience across devices and reflecting your brand’s identity.',
            icon: '🖌️',
        },
        {
            id: '04',
            title: 'Branding',
            description:
                'We craft memorable brand identities, from logos to complete strategies, ensuring consistency and a strong connection with your audience across all platforms.',
            icon: '🏷️',
        },
    ];
    return (
        <section className="services-section">
            <h2 className="services-title">How Can I <br /> Assist You?</h2>
            <div className="services-grid">
                {services.map((service) => (
                    <div key={service.id} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <p className="service-description">{service.description}</p>
                        <div className="service-footer">
                            <h3>{service.title}</h3>
                            <span>{service.id}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;