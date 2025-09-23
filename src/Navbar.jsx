import React from "react";
import { Link } from "react-scroll";
import { jsPDF } from "jspdf";
import './Navbar.css';
import { aboutMe, experience, skills, projects, certificates } from './data';

function Navbar() {

  const generateResume = () => {
    const doc = new jsPDF();
    let y = 10;

    // Header - Name
    doc.setFont("times", "bold");
    doc.setFontSize(16);
    doc.text("Akilesh V", 105, y, { align: "center" });
    y += 8;

    doc.setFont("times", "normal");
    doc.setFontSize(11);
    doc.text("Final-year Computer Science Undergraduate (Cybersecurity Specialization)", 105, y, { align: "center" });
    y += 12;

    // About Me
    doc.setFont("times", "bold");
    doc.setFontSize(13);
    doc.text("About Me", 14, y);
    y += 6;

    doc.setFont("times", "normal");
    doc.setFontSize(11);
    doc.text(aboutMe, 14, y, { maxWidth: 182 });
    y += 25;

    // Education
    doc.setFont("times", "bold");
    doc.setFontSize(13);
    doc.text("Education", 14, y);
    y += 6;

    doc.setFont("times", "normal");
    doc.setFontSize(11);
    doc.text("B.Tech in Computer Science and Engineering (Cybersecurity) - SRM Institute of Science and Technology | CGPA: 9.20", 14, y, { maxWidth: 182 });
    y += 15;

    // Experience
    doc.setFont("times", "bold");
    doc.setFontSize(13);
    doc.text("Experience", 14, y);
    y += 6;

    experience.forEach((exp) => {
      doc.setFont("times", "bold");
      doc.setFontSize(13);
      doc.text(exp.title, 14, y);
      y += 6;

      doc.setFont("times", "normal");
      doc.setFontSize(11);
      doc.text(`Organization: ${exp.organization}`, 14, y);
      y += 5;
      doc.text(`Duration: ${exp.duration}`, 14, y);
      y += 5;

      exp.description.split("\n").forEach(line => {
        if(line.trim() !== "") {
          doc.text(`• ${line.trim()}`, 16, y);
          y += 5;
        }
      });

      y += 5;
    });

    y += 5;

    // Skills
    doc.setFont("times", "bold");
    doc.setFontSize(13);
    doc.text("Skills", 14, y);
    y += 6;

    skills.forEach((group) => {
      doc.setFont("times", "bold");
      doc.setFontSize(13);
      doc.text(group.category, 14, y);
      y += 6;

      doc.setFont("times", "normal");
      doc.setFontSize(11);
      doc.text(group.items.join(", "), 16, y);
      y += 10;
    });

    // Projects
    doc.setFont("times", "bold");
    doc.setFontSize(13);
    doc.text("Projects", 14, y);
    y += 6;

    projects.forEach((p) => {
      doc.setFont("times", "bold");
      doc.setFontSize(13);
      doc.text(p.title, 14, y);
      y += 6;

      doc.setFont("times", "normal");
      doc.setFontSize(11);
      doc.text(p.caption, 16, y, { maxWidth: 180 });
      y += 6;
      doc.text(`Tech: ${p.tech}`, 16, y);
      y += 10;
    });

    // Certificates
    doc.setFont("times", "bold");
    doc.setFontSize(13);
    doc.text("Certificates", 14, y);
    y += 6;

    certificates.forEach((c) => {
      doc.setFont("times", "bold");
      doc.setFontSize(13);
      doc.text(c.title, 14, y);
      y += 6;

      doc.setFont("times", "normal");
      doc.setFontSize(11);
      doc.text(c.organization, 16, y);
      y += 6;
      doc.text(`Link: ${c.link}`, 16, y);
      y += 10;
    });

    doc.save("AkileshV_Resume.pdf");
  };

  return (
    <nav className="navbar">
      {/* Clicking title downloads resume */}
      <div className="nav-title" onClick={generateResume} style={{ cursor: 'pointer' }}>
        My Portfolio
      </div>
      <ul className="nav-links">
        <li><Link to="home" smooth={true} duration={500} offset={-90}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} offset={-90}>About Me</Link></li>
        <li><Link to="experience" smooth={true} duration={500} offset={-90}>Experience</Link></li>
        <li><Link to="skills" smooth={true} duration={500} offset={-90}>Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={500} offset={-90}>Projects</Link></li>
        <li><Link to="certificates" smooth={true} duration={500} offset={-90}>Certificates</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
