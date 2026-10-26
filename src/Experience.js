import React, { useState } from 'react';
import './Experience.css';
import BookingCall from './BookingCall';
import dropy from './dropy.png';
import upworklogoo from './upworklogoo.png';
import smartitlogoo from './smartitlogoo.png';
import waliinlogo from './waliinlogo.jpeg';
import masjidlogo from './masjidlogo.webp';
import aiulogo from './aiulogo.jpg';
import codexlogo from './codexlogoo.png';
import buupasslogo from './buupasslogoo.png';
import lpgaslogo from './Lpgaslogo.svg';


function Experience() {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex((currentIndex) => currentIndex === index ? null : index);
    };

    // add my lpgas

    const jobs = [
         {
            company: 'Waliin',
            title: 'Senior Android Engineer',
            duration: 'July 2025 — January 2026',
            logo: waliinlogo,
            location: "Rochester, New York, United States · Remote",
            description: [
                {
                    pointo: "Lead engineer on the consumer Android app serving 2M+ users across Africa."
                },
                {
                    pointo: "Migrated the entire codebase from XML Views to Jetpack Compose, reducing UI development time by 40%."
                },
                {
                    pointo: "Architecting the Compose Multiplatform expansion targeting iOS and Web."
                },
                {
                    pointo: "Provided on-call support and training to non-technical employees on the system's usage, resulting in improved productivity and efficiency in the field."
                },
                {
                    pointo: "Continuously incorporated user feedback to improve app experience and fix bugs, resulting in higher customer satisfaction."
                },
                {
                    pointo: "Implemented Unit Tests to ensure app stability and minimize production bugs."
                }
            ]
        },
        {
            company: 'Masjid Timetable',
            title: 'Android Developer',
            duration: 'March 2022 — May 2025',
            logo: masjidlogo,
            location: "London Area, United Kingdom · Remote",
            description: [
                {
                    pointo: "Embedded in client teams (US-based SaaS startups) as an Android specialist."
                },
                {
                    pointo: "Delivered three apps from MVP to store launch."
                },
                {
                    pointo: "Introduced modular architecture patterns that cut build times by 55%."
                },
                {
                    pointo: "onboarded junior engineers."
                }
            ]
        },
           {
            company: 'Smart IT Ventures Pvt. Ltd.',
            title: 'Android Developer',
            duration: 'December 2022 — April 2025',
            logo: smartitlogoo,
            location: "Rupnagar, Punjab, India · On-site",
            description: [
                {
                    pointo: "Studio Management Features: Integrated payment processing, booking systems, and availability calendars to streamline studio operations."
                },
                {
                    pointo: "Google Maps API Integration: Implemented location detection and retrieval in Android applications."
                },
                {
                    pointo: "Offline Data Sync: Added functionality to sync local data with a remote server when a network is available."
                },
                {
                    pointo: "Front-End Development: Developed responsive UI using Kotlin and Java."
                },
                {
                    pointo: "API Integration: Utilized Retrofit for seamless backend communication and data retrieval."
                },
                {
                    pointo: "Real-Time Chat: Integrated Firebase Database for real-time chat functionality."
                },
                {
                    pointo: "Architecture: Followed MVVM architecture for clean and maintainable code structure."
                }
            ]
        },
        {
            company: 'BuuPass - Bus, Train & Flight bookings',
            title: 'Android Developer',
            duration: 'October 2021 — December 2024',
            logo: buupasslogo,
            location: "Nairobi County, Kenya · On-site",
            description: [
                {
                    pointo: "Maintain and improve upon existing BMS client apps"
                },
                {
                    pointo: "built a marketplace for bus tickets, flights and train"
                },
                {
                    pointo: "Developed a mobile-based ticketing POS system for bus agents, automating the ticketing process and improving transaction speed by 30%, resulting in a smoother customer experience and increased operational efficiency."
                },
                {
                    pointo: "Collaborated with designers and product managers to implement intuitive user interfaces that improved app usability, reducing user drop-off rates by 20% in key app features."
                },
                {
                    pointo: "Optimized the app's codebase by refactoring legacy code, which reduced app crashes by 25% and improved load times by 15%, leading to higher customer satisfaction and fewer support tickets"
                }

            ]
        },
        {
            company: 'Africa International University',
            title: 'Android Developer',
            duration: 'January 2021 — October 2024',
            logo: aiulogo,
            location: "Nairobi County, Kenya · On-site",
            description: [
                {
                    pointo: "Developed a graduation app for the university."
                },
                {
                    pointo: "Devised documentation for each app, detailing operation aspects, functions, capabilities and features."
                },
                {
                    pointo: "Provided dedicated support and timely issue resolution to clients following successful app launch."
                },
                {
                    pointo: "Designed user interfaces that engaged multiple senses and produced immersive experiences."
                },
                {
                    pointo: "Devised techniques for better modularity, testability and maintainability of front-end applications"
                },
                {
                    pointo: "Successfully integrated push notifications into apps, bolstering user engagement."
                },
                {
                    pointo: "Employed JUnit framework to perform unit tests."
                },
                {
                    pointo: "Used third-party libraries, custom libraries and APIs to develop new applications."
                },
                {
                    pointo: "Created custom mobile applications using native technologies."
                },
                {
                    pointo: "Incorporated offline storage, performance tuning and threading into apps for seamless use."
                },
            ]
        },
        {
            company: 'Dropy Limited',
            title: 'Android Developer',
            duration: 'January 2022 — August 2024',
            logo: dropy,
            location: "Nairobi County, Kenya · On-site",
            description: [
                {
                    pointo: "Developed a high-performing native Android Sales app, replacing the previous web application and reducing bandwidth usage by 80% margin with the ability to work partially offline."
                },
                {
                    pointo: "Designed and integrated Mobile B2B apps (iOS, Android) for sales executives and customers, providing convenience and ease of use for ordering."
                },
                {
                    pointo: "Assisted with the integration of various financial institutions for seamless payment and automatic reconciliation, improving customer satisfaction and retention."
                },
                {
                    pointo: "Provided on-call support and training to non-technical employees on the system's usage, resulting in improved productivity and efficiency in the field."
                },
                {
                    pointo: "Continuously incorporated user feedback to improve app experience and fix bugs, resulting in higher customer satisfaction."
                },
                {
                    pointo: "Implemented Unit Tests to ensure app stability and minimize production bugs."
                },
            ]
        },
          {
            company: 'my Lpgas',
            title: 'Android Developer',
            duration: 'November 2020 — May 2022',
            logo: lpgaslogo,
            location: "Nairobi County, Kenya · On-site",
            description: [
                {
                    pointo: "Leveraging Kotlin for Android application development."
                },
                {
                    pointo: "Utilizing Jetpack Compose for creating dynamic UIs."
                },
                {
                    pointo: "Implementing state management with Jetpack Compose's State and ViewModel."
                },
                {
                    pointo: "Designing and developing custom UI components using Jetpack Compose."
                },
                {
                    pointo: "Writing UI tests to validate Jetpack Compose UI components."
                },
                {
                    pointo: "Ensuring comprehensive test coverage for UI layer."
                },
                {
                    pointo: "Optimizing performance of Jetpack Compose UIs."
                },
                {
                    pointo: "Integrating Jetpack libraries for enhanced functionality."
                },
                {
                    pointo: "Applying the MVVM architecture pattern for scalable and testable code."
                },
                {
                    pointo: "Using Retrofit for networking and managing API integrations."
                },
                {
                    pointo: "Implementing Paging to handle large data sets efficiently."
                }
            ]
        },
        {
            company: 'Upwork',
            title: 'Android Developer',
            duration: 'Jul 2019 – Present',
            logo: upworklogoo,
            location: "Nairobi County, Kenya · On-site",
            description: [
                {
                    pointo: "Google Play Store Compliance – Ensuring apps follow Play Store policies and guidelines."
                },
                {
                    pointo: "App Deployment & Release Management – Handling app releases, updates, and staged rollouts."
                },
                {
                    pointo: "Google Play Console Management – Managing app listings, reviews, and analytics."
                },
                {
                    pointo: "App Bundle & APK Optimization – Preparing optimized builds for efficient deployment."
                },
                {
                    pointo: "In-App Purchases & Subscriptions – Implementing Google Play Billing system."
                },
                {
                    pointo: "Privacy Policy & Data Security Compliance – Ensuring GDPR and Play Store policy adherence."
                },
                {
                    pointo: "App Monetization Strategies – Implementing ads, subscriptions, and in-app purchases."
                },
                {
                    pointo: "Beta Testing & Internal Testing – Setting up closed and open testing tracks."
                },
                {
                    pointo: "App Review & Policy Violation Handling – Resolving Play Store rejections and appeals."
                },
                {
                    pointo: "Performance & Crash Reporting – Using Play Console tools like ANRs, crashes, and pre-launch reports."
                }
            ]
        },
        {
            company: 'Codex Technologies, Ltd.',
            title: 'Android Developer',
            duration: 'Jan 2021 – Jan 2023',
            logo: codexlogo,
            location: "Nairobi County, Kenya · On-site",
            description: [
                {
                    pointo: "Web design & development"
                },
                {
                    pointo: "App development"
                },
                {
                    pointo: "Software development"
                },
                {
                    pointo: "IT consultancy services"
                },
                {
                    pointo: "SEO services"
                },
                {
                    pointo: "Networking & cloud services"
                }
            ]
        }
    ]

    return (
        <section className="experience-section">
            <div className="experience-grid">
                <div className="experience-cta">
                    <h2>Wanna see<br />my experience?</h2>
                    <BookingCall />
                </div>

                {jobs.map((job, index) => (
                    <div className={`experience-card ${expandedIndex === index ? "expanded" : ""}`} key={index}>
                        <div className="experience-header">
                            <img src={job.logo} alt="Logo" className="company-logo" />
                            <div>
                                <h2 className="role-title">{job.title}</h2>
                                <p className="company-name">{job.company}</p>
                                <p className="work-details">{job.duration}</p>
                                <p className="location">{job.location}</p>
                            </div>
                        </div>

                        <ul className={`description-list ${expandedIndex === index ? "expanded" : ""}`}>
                            {job.description.map((desc, indeex) => (
                                <li key={indeex}>{desc.pointo}</li>
                            ))}
                        </ul>

                        <button className="see-more-btn" onClick={() => toggleExpand(index)}>
                            {expandedIndex === index ? "See Less" : "See More"}
                        </button>

                        <div className="skills">
                            <strong>🧪 Test-Driven Development, Kotlin</strong> and +8 skills
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;