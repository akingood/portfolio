import React from "react";
import { Link } from "react-scroll";
import { jsPDF } from "jspdf";
import './Navbar.css';
import { aboutMe, experience, skills, projects, certificates } from './data';

function Navbar() {

  const generateResume = () => {
    const doc = new jsPDF({
      unit: "pt", // points for precise control
      format: "a4"
    });

    let y = 60; // top margin
    const leftMargin = 40;
    const maxWidth = 515; // A4 width (595pt) - margins (40 left + 40 right)

    // ===== Header =====
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("AKILESH V", 297.5, y, { align: "center" });
    y += 20;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(
      "akivenky10@gmail.com | linkedin | GitHub | +91 8438396334 | Chennai",
      297.5,
      y,
      { align: "center", maxWidth: maxWidth }
    );
    y += 30;

    // ===== Summary =====
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Summary", leftMargin, y);
    y += 16;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(aboutMe, leftMargin, y, { maxWidth: maxWidth });
    y += 60;

    // ===== Education =====
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Education", leftMargin, y);
    y += 16;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(
      "B.Tech in Computer Science and Engineering (Cybersecurity), SRM Institute of Science and Technology",
      leftMargin,
      y,
      { maxWidth: maxWidth }
    );
    y += 14;
    doc.text("2022 - 2026 | Current CGPA: 9.20", leftMargin, y);
    y += 30;

    // ===== Experience =====
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Work Experience", leftMargin, y);
    y += 20;

    experience.forEach((exp) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text(`${exp.title} – ${exp.organization}`, leftMargin, y);
      y += 14;

      doc.setFont("helvetica", "italic");
      doc.setFontSize(10);
      doc.text(exp.duration, leftMargin, y);
      y += 14;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      exp.description.split("\n").forEach((line) => {
        if (line.trim() !== "") {
          doc.text(`• ${line.trim()}`, leftMargin + 15, y, {
            maxWidth: maxWidth - 20,
          });
          y += 14;
        }
      });
      y += 12;
    });

    // ===== Skills =====
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Technical Skills", leftMargin, y);
    y += 20;

    skills.forEach((group) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(group.category + ":", leftMargin, y);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text(group.items.join(", "), leftMargin + 100, y, {
        maxWidth: maxWidth - 100,
      });
      y += 16;
    });
    y += 10;

    // ===== Projects =====
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Projects", leftMargin, y);
    y += 20;

    projects.forEach((p) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text(p.title, leftMargin, y);
      y += 14;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text(`• ${p.caption}`, leftMargin + 15, y, { maxWidth: maxWidth - 20 });
      y += 14;
      doc.text(`Tech: ${p.tech}`, leftMargin + 15, y, {
        maxWidth: maxWidth - 20,
      });
      y += 18;
    });

    // ===== Certifications =====
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Certifications", leftMargin, y);
    y += 20;

    certificates.forEach((c) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text(c.title, leftMargin, y);
      y += 14;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text(c.organization, leftMargin + 15, y);
      y += 14;
      doc.text(`Link: ${c.link}`, leftMargin + 15, y, {
        maxWidth: maxWidth - 20,
      });
      y += 18;
    });

    doc.save("AkileshV_Resume.pdf");
  };

  return (
    <nav className="navbar">
      {/* Clicking title downloads resume */}
      <div
        className="nav-title"
        onClick={generateResume}
        style={{ cursor: "pointer" }}
      >
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
