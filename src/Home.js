import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from "typewriter-effect";
import './Home.css';

class Home extends React.Component {
    state = {}
    render() {
        return (
            <>
                <div  id="Home"  className="main-content">
                    <div className="content">
                        <div className="side-img">
                            <img src="/profile-photo.jpg" alt="profile-photo"></img>
                        </div> 

                        <div className="introduction">
                            <h4> Hello, I'm</h4>
                            <h1> Praveen Hosamani</h1>

                            <div className="Typewriter" >
                                <div className="fixed-content">
                                    <h5> And I'm a </h5>
                                </div>
                                
                                <div className="writer" style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center", color: '#00a8e8' }}>
                                    <Typewriter options={{
                                        strings: ["Fullstack Developer ", "Web Developer", "Designer"],
                                        autoStart: true,    // typing speed in ms (lower = faster) deleteSpeed: 50,
                                        loop: true,         // delete speed in ms pauseFor: 2000,
                                        delay: 120,          // pause before deleting (in ms) 
                                    }}
                                    />
                                    
                                </div>
                            </div>
                            
                            <div className="about-me">
                                <p> I enjoy problem-solving, learning new skills, and working on projects <br></br>
                                    that make a real impact. When I'm not coding, I spend time exploring<br></br>
                                    new tools, reading, or working on creative ideas.</p>
                            </div>

                            <div className="icons">
                                <div className="facebook-icon">
                                    <a href="https://www.facebook.com/share/1BM8RFKLZ9/" alt="facebook-image">
                                        <img src="/icons/facebok-icon.png" alt="facebook-image"></img></a>
                                </div>

                                <div className="linkedin-icon">
                                    <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" alt="Linked-in-image">
                                        <img src="/icons/linkedin-icon.png" alt="linked-in"></img>
                                    </a>
                                </div>

                                <div className="github-icon">
                                    <a href="https://github.com/Praveen-Hosamani" alt="Github-image">
                                        <img src="/icons/github-icon.png" alt="github"></img>
                                    </a>
                                </div>
                                
                                <div className="instagram-icon" >
                                    <a href="https://www.instagram.com/starsports_officia?igsh=MWdpOHZzNm14ZXllcA==" alt="instagram-image">
                                        <img src="/icons/instagram-icon.png" alt="instagram"></img>
                                    </a>
                                </div>
                            </div>

                            <div className="buttons">
                                <div className="btn btn-secondary" style={{ cursor: 'default' }}> Hire Me</div>
                                <a href="/Contact.js" class="btn btn-secondary " role="button" alt="contact-button">Contact Me</a>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
