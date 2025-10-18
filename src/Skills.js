import React from "react";
import './Skills.css';

function Skills() {
    return (
        <>
            <div  className="skills-container">
                <div className="skill-title">
                    <h4>My Skills.</h4>
                </div>

                <div className="skills-grid" id="Skills">
                    <div className="skill-item">
                        <img src="/technical skills/html-logo.png" alt="HTML" />
                        <p>HTML</p>
                    </div>

                    <div className="skill-item">
                        <img src="/technical skills/css-logo.png" alt="CSS" />
                        <p>CSS</p>
                    </div>

                    <div className="skill-item">
                        <img src="/technical skills/javascript-logo.png" alt="JavaScript" />
                        <p>JAVASCRIPT</p>
                    </div>

                    <div className="skill-item">
                        <img src="/technical skills/react-logo.png" alt="React" />
                        <p>REACT</p>
                    </div>

                    <div className="skill-item">
                        <img src="/technical skills/python-logo.png" alt="Python" />
                        <p>PYTHON</p>
                    </div>

                    <div className="skill-item">
                        <img src="/technical skills/mysql-logo.png" alt="MySQL" />
                        <p>MYSQL</p>
                    </div>


                    <div className="skill-item">
                        <img src="/technical skills/mongodb-logo.png" alt="MongoDB" />
                        <p>MONGODB</p>
                    </div>

                    <div className="skill-item">
                        <img src="/technical skills/database-logo.png" alt="DB Management" />
                        <p>DB MANAGEMENT</p>
                    </div>

                    <div className="skill-item">
                        <img src="/professional skills/communication.png" alt="Communication" />
                        <p>COMMUNICATION</p>
                    </div>

                    <div className="skill-item">
                        <img src="/professional skills/creativity.png" alt="Creativity" />
                        <p>CREATIVITY</p>
                    </div>

                    <div className="skill-item">
                        <img src="/professional skills/team-work.png" alt="Team Work" />
                        <p>TEAM-WORK</p>
                    </div>

                    <div className="skill-item">
                        <img src="/professional skills/problem-solving.png" alt="Problem Solving" />
                        <p>PROBLEM-SOLVING</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Skills;
