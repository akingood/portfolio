// data.js
import mlCert from './assets/ml-cert.jpg';
import dsaCert from './assets/dsa-cert.jpg';
import ehCert from './assets/eh-cert.jpg';
import esCert from './assets/es-cert.jpg';
import pyCert from './assets/py-cert.jpg';
import dsCert from './assets/ds-cert.jpg';
import csCert from './assets/cs-cert.png';

export const aboutMe = `Final-year Computer Science undergraduate (Cybersecurity specialization) with strong foundations in full-stack development, software engineering, and AI/ML integration. Skilled in Python, MERN stack, SQL/NoSQL databases, and building scalable APIs and dashboards. Experienced in applying TensorFlow, SDLC, and OCR techniques to real-world projects. Strong problem-solving, debugging, and teamwork skills with hands-on exposure to Agile practices. Passionate about developing end-to-end applications and integrating AI/ML to create impactful solutions.`;

export const experience = [
    {
        title: "Cybersecurity Intern",
        organization: "HTC Global Services",
        duration: "Aug 2025 – Sept 2025 | Remote",
        description: `
        • Collaborated with the technology team under the guidance of the Director to gain hands-on exposure in enterprise IT solutions.
        • Assisted in designing and developing scalable, reusable code modules, aligning with industry best practices in software engineering.
        • Collaborated with the team to produce an optimal solution by building a tool ensuring code quality and maintainability.
        `
    }
];

export const skills = [
  { category: "Programming", items: ["Python", "Java", "HTML", "Javascript"] },
  { category: "Frameworks", items: ["MERN Stack", "TensorFlow", "Streamlit"] },
  { category: "Backend and Databases", items: ["SQL", "RESTful APIs", "Firebase"] },
  { category: "Knowledge Areas", items: ["DSA", "SDLC", "OOPs", "Problem Solving", "Agile"] },
  { category: "Data Science & ML", items: ["Pandas", "NumPy", "HuggingFace", "NLTK"] },
  { category: "Tools", items: ["VSCode", "Git", "Jupyter", "MS Excel"] }
];

export const projects = [
    { title: "Packet Sniffer", caption: "Streamlit-based web application for network packet analysis and anomaly detection.", tech: "Streamlit, Scapy, Python, TensorFlow", githubLink: "https://github.com/akingood/packet_sniffer" },
    { title: "Live Map", caption: "Real-time geospatial tracking application with interactive dashboards.", tech: "Flutter, Open Street Map, Firebase, Geo-fencing", githubLink: "https://github.com/akingood/livesphere" },
    { title: "Prescription Reader", caption: "Automated data extraction from handwritten prescriptions.", tech: "Python, OpenCV, Neural Network", githubLink: "#" },
    { title: "To-Do List", caption: "Full-stack task management system supporting CRUD operations.", tech: "MongoDB, Express.js, React, Node.js", githubLink: "https://github.com/akingood/mern-todo" },
    { title: "Rock Paper Scissors with Logic Gates", caption: "Interactive RPS game using logic gate formulas with PvC and PvP modes.", tech: "React, JavaScript, Logic Gates", githubLink: "https://github.com/akingood/rps" },
    { title: "Flames Calculator", caption: "Fun project for calculating relationship outcomes.", tech: "JavaScript", githubLink: "https://github.com/akingood/flames" }
];

export const certificates = [
    { title: "Introduction to Machine Learning", organization: "NPTEL", image: mlCert, link: "https://www.linkedin.com/in/akilesh-venugopal/details/certifications/1756637705405/single-media-viewer/?profileId=ACoAAEGnQqgB_axoczOKMAbT235I6Hzoq0j476M" },
    { title: "Programming, DSA with Python", organization: "NPTEL", image: dsaCert, link: "https://www.linkedin.com/in/akilesh-venugopal/details/certifications/1756637910927/single-media-viewer/?profileId=ACoAAEGnQqgB_axoczOKMAbT235I6Hzoq0j476M" },
    { title: "Ethical Hacking", organization: "NPTEL", image: ehCert, link: "https://www.linkedin.com/in/akilesh-venugopal/details/certifications/1756638084377/single-media-viewer/?profileId=ACoAAEGnQqgB_axoczOKMAbT235I6Hzoq0j476M" },
    { title: "Endpoint Security", organization: "Cisco", image: esCert, link: "https://www.linkedin.com/in/akilesh-venugopal/details/certifications/1756637309461/single-media-viewer/?profileId=ACoAAEGnQqgB_axoczOKMAbT235I6Hzoq0j476M" },
    { title: "Google Certificate in Python", organization: "Coursera", image: pyCert, link: "https://www.linkedin.com/in/akilesh-venugopal/details/certifications/1756636731239/single-media-viewer/?profileId=ACoAAEGnQqgB_axoczOKMAbT235I6Hzoq0j476M" },
    { title: "Programming and Data Science", organization: "IIT Madras", image: dsCert, link: "https://www.linkedin.com/in/akilesh-venugopal/details/certifications/1756636106063/single-media-viewer/?profileId=ACoAAEGnQqgB_axoczOKMAbT235I6Hzoq0j476M" },
    { title: "Advanced Cybersecurity and Ethical Hacking", organization: "Guvi", image: csCert, link: "https://www.linkedin.com/in/akilesh-venugopal/details/certifications/1756636433634/single-media-viewer/?profileId=ACoAAEGnQqgB_axoczOKMAbT235I6Hzoq0j476M" }
];
