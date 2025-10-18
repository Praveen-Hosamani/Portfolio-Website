import React from "react";
// import 'bootstraap/dist/css/bootstrap.min.css';
import './About.css';

class About extends React.Component {
    state = {}
    render() {
        return (
            <>
                <div id="About" className="about-container">
                    <div className="about-header">
                        <div className="side-image" >
                            <img src="/icons/develper-icon.png" id="about-2"></img>
                        </div>

                        <div className="about-content">
                            <div className="about-text" >
                                <h1> About </h1>
                                <span> Me</span><br></br>
                            </div>

                            <div className="about-para">
                                <p> Hi, I’m Praveen Hosamani. I have  working  front-end and other technologies, including HTML, CSS, JavaScript, React, Node.js with specializing in building dynamic and scalable web applications</p>
                            </div>

                            <div className="about-para">
                                <p>My focus is on creating seamless user experiences, optimizing performance, and writing clean, maintainable code. I enjoy solving complex problems and turning innovative ideas into functional, high-quality digital solutions.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default About;