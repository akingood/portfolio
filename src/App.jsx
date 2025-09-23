import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import profimg from './assets/RA2211030020188_Akilesh.png';
import { aboutMe, experience, skills, projects, certificates } from './data';

function App() {
    return (
        <div className='home-page'>
            <Navbar />
            
            {/* Home Section */}
            <section id="home" className="home-section">
                <div className='intro'>
                    <div className='left'>
                        <div className='name'>
                            <p style={{ display: 'inline' }}>Hello there, I am </p>
                            <h1 style={{ display: 'inline' }}>“AKILESH V”.</h1>
                        </div>
                        <h2> A Passionate Developer </h2>
                        <div className="social-icons">
                            <a href="https://github.com/akingood" target="_blank" rel="noopener noreferrer" className='icon github'> 
                                <FaGithub size={35} />
                            </a>
                            <a href="https://www.linkedin.com/in/akilesh-venugopal/" target="_blank" rel="noopener noreferrer" className='icon linkedin'> 
                                <FaLinkedin size={35} />
                            </a>
                            <a href="https://wa.me/918438396334" target="_blank" rel="noopener noreferrer" className='icon whatsapp'> 
                                <FaWhatsapp size={35} />
                            </a>
                            <a href="https://www.instagram.com/aki.track/" target="_blank" rel="noopener noreferrer" className='icon instagram'> 
                                <FaInstagram size={35} />
                            </a>
                        </div>
                    </div>
                    <div className='right'>
                        <img src={profimg} alt="Akilesh V" className='profile'/>
                    </div>
                </div>
            </section>

            <hr className="divider" />

            {/* About Section */}
            <section id="about" className="about-section">
                <h2 className='about'>About Me</h2>
                <p className="description">{aboutMe}</p>
            </section>

            <hr className="divider" />

            {/* Experience Section */}
            <section id="experience" className="experience-section">
                <h2 className="experience">Experience</h2>
                <div className="experience-list">
                    {experience.map((exp, index) => (
                        <div key={index} className="experience-card">
                            <h3 className="experience-title">{exp.title}</h3>
                            <p className="experience-org"><strong>Organization:</strong> {exp.organization}</p>
                            <p className="experience-duration"><strong>Duration:</strong> {exp.duration}</p>
                            <div className="experience-desc">
                                {exp.description.split("\n").map((line, idx) => (
                                    <p key={idx}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <hr className="divider" />

            {/* Skills Section */}
            <section id="skills" className="skills-section">
                <h2 className="skills">Skills</h2>
                <div className="skill-set">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-category">{skillGroup.category}</div>
                            <div className="skill-items">
                                {skillGroup.items.map((item, idx) => (
                                    <span key={idx} className="skill">{item}</span>
                                ))}
                            </div> 
                        </div>
                    ))}
                </div>
            </section>

            <hr className="divider" />

            {/* Projects Section */}
            <section id="projects" className="projects-section">
                <h2 className="projects">Projects</h2>
                <div className="project-list">
                    {projects.map((p, index) => (
                        <div key={index} className="project-card">
                            <h3 className="project-title">{p.title}</h3>
                            <p className="project-caption">{p.caption}</p>
                            <p className="project-tech">Tech: {p.tech}</p>
                            <div className="project-buttons">
                                <a href={p.githubLink} target="_blank" rel="noopener noreferrer" className="btn git-btn">GitHub</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <hr className="divider" />

            {/* Certificates Section */}
            <section id="certificates" className="certificates-section">
                <h2 className="certificates">Certificates</h2>
                <div className="cert-list">
                    {certificates.map((cert, index) => (
                        <div key={index} className="cert-card">
                            <img src={cert.image} alt={cert.title} className="cert-image" />
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-org">{cert.organization}</p>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn cert-btn">View Certificate</a>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}

export default App;
