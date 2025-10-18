import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';

class Projects extends React.Component {
    state = {}
    render() {
        return (
            <>
                <div  className='projets-container'>
                    <div className='project-header'>
                        <h1 id="Projects"> My Projects</h1>
                    </div>

                    <div className='project-items' >
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="/bakery.jpg" className="card-img-top" alt="Card example" />
                            <div className="card-body">
                                <h5 className="card-title">Cakeshop Website</h5>
                                <p className="card-text"> Built a responsive bakery website using modern web technologies to highlight cakes and special offers.</p>

                                <div className='buttonss'>
                                    <a href="http://pavu-hosamani01netlifyapp.netlify.app" className="btn btn-primary" alt="button">Live Demo</a>
                                    <a href="https://github.com/Praveen-Hosamani/first-website" className="btn btn-primary" alt="button" >Github</a>
                                </div>

                            </div>
                        </div>

                        <div className="card" style={{ width: "18rem" }}>
                            <img src="/bakery.jpg" className="card-img-top" alt="Card example" />
                            <div className="card-body">
                                <h5 className="card-title">College Website</h5>
                                <p className="card-text"> Developed a dynamic college website to highlight courses, faculty, and student activities.</p>

                                <div className='buttonss'>
                                    <a href="https://github.com/Praveen-Hosamani/first-website" className="btn btn-primary" alt="button" >Live Demo</a>
                                    <a href="https://github.com/Praveen-Hosamani/first-website" className="btn btn-primary" alt="button" >Github</a>
                                </div>

                            </div>
                        </div>

                        <div className="card" style={{ width: "18rem" }}>
                            <img src="/portfolio-image.png" className="card-img-top" alt="Card example" />
                            <div className="card-body">
                                <h5 className="card-title">portfolio Website</h5>
                                <p className="card-text"> Created a personal portfolio site with modern design to display projects and skills effectively.</p>

                                <div className='buttonss'>
                                    <a href="https://praveen-hosamani.netlify.app/" className="btn btn-primary" alt="button" >Live Demo</a>
                                    <a href="https://github.com/Praveen-Hosamani/Portfolio-Website" className="btn btn-primary" alt="button" >Github</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Projects;
