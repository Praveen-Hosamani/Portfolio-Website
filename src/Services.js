import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';

class Services extends React.Component {
    state = {}
    render() {
        return (
            <>
                <div className="services-container">
                    <div className="services-header">
                        <h3> My Services </h3>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <img src="/services/web-development.png" alt="Web Development" />
                            <h6>Web Development</h6>
                            <p>I create modern, responsive, and user-friendly websites that combine clean design with seamless performance across all devices.</p>
                        </div>

                        <div className="service-card">
                            <img src="/services/ui-ux.png" alt="UI/UX" />
                            <h6>UX UI</h6>
                            <p>I design intuitive and engaging user interfaces with seamless experiences that make every interaction simple and enjoyable.</p>
                        </div>

                        <div className="service-card">
                            <img src="/services/database.png" alt="Database Management" />
                            <h6>Database Management</h6>
                            <p>I design and manage secure, scalable databases that ensure efficient data storage, fast access, and reliable performance.</p>
                        </div>

                        <div className="service-card">
                            <img src="/services/github.png" alt="GitHub" />
                            <h6>GitHub</h6>
                            <p>I use GitHub for version control and collaboration, ensuring clean code management and seamless teamwork on projects.</p>
                        </div>

                        <div className="service-card">
                            <img src="/services/web-hosting.png" alt="Web Hosting" />
                            <h6>Web Hosting</h6>
                            <p>I host websites and applications on reliable platforms like Netlify, Vercel, and Heroku, ensuring speed, security, and accessibility.</p>
                        </div>

                        <div className="service-card">
                            <img src="/services/web-development.png" alt="Web Development" />
                            <h6>Web Development</h6>
                            <p>I create modern, responsive, and user-friendly websites that combine clean design with seamless performance across all devices.</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Services;
