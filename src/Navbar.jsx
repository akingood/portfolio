import React from "react";
import { Link } from "react-scroll";
import { jsPDF } from "jspdf";
import './Navbar.css';
import { aboutMe, experience, skills, projects, certificates } from './data';

function Navbar() {

  const generateResume = () => {
    const doc = new jsPDF({
      unit: "pt",
      format: "a4"
    });

    // Page setup
    const leftMargin = 40;
    const rightMargin = 40;
    const topMargin = 60;
    const bottomMargin = 60;
    const pageHeight = doc.internal.pageSize.getHeight();
    const maxWidth = doc.internal.pageSize.getWidth() - leftMargin - rightMargin;
    let y = topMargin;

    // Helper: check for page break
    const checkPageBreak = (neededHeight = 20) => {
      if (y + neededHeight > pageHeight - bottomMargin) {
        doc.addPage();
        y = topMargin;
      }
    };

    // Helper: add wrapped text with spacing
    const addWrappedText = (text, x = leftMargin, fontSize = 11, lineHeight = 14, indent = 0) => {
      doc.setFontSize(fontSize);
      const wrapped = doc.splitTextToSize(text, maxWidth - indent);
      wrapped.forEach(line => {
        checkPageBreak(lineHeight);
        doc.text(line, x + indent, y);
        y += lineHeight;
      });
      return wrapped.length * lineHeight;
    };

    // ===== Header =====
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("AKILESH V", doc.internal.pageSize.getWidth() / 2, y, { align: "center" });
    y += 22;

    // ===== Summary =====
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Summary", leftMargin, y);
    y += 18;

    doc.setFont("helvetica", "normal");
    addWrappedText(aboutMe, leftMargin, 11, 14);
    y += 10;

    // ===== Education =====
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Education", leftMargin, y);
    y += 18;

    doc.setFont("helvetica", "normal");
    addWrappedText(
      "B.Tech in Computer Science and Engineering (Cybersecurity), SRM Institute of Science and Technology",
      leftMargin, 11, 14
    );
    addWrappedText("2022 - 2026 | Current CGPA: 9.20", leftMargin, 11, 14);
    y += 10;

    // ===== Work Experience =====
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Work Experience", leftMargin, y);
    y += 20;

    experience.forEach((exp) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      addWrappedText(`${exp.title} – ${exp.organization}`, leftMargin, 12, 16);

      doc.setFont("helvetica", "italic");
      addWrappedText(exp.duration, leftMargin, 10, 14);

      doc.setFont("helvetica", "normal");
      exp.description.split("\n").forEach((line) => {
        if (line.trim() !== "") {
          addWrappedText(`${line.trim()}`, leftMargin, 11, 14, 15);
        }
      });
      y += 10;
    });

    // ===== Technical Skills =====
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Technical Skills", leftMargin, y);
    y += 20;

    skills.forEach((group) => {
      doc.setFont("helvetica", "bold");
      addWrappedText(group.category + ":", leftMargin, 11, 14);

      doc.setFont("helvetica", "normal");
      addWrappedText(group.items.join(", "), leftMargin + 15, 11, 14);
    });
    y += 10;

    // ===== Projects =====
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Projects", leftMargin, y);
    y += 20;

    projects.forEach((p) => {
      doc.setFont("helvetica", "bold");
      addWrappedText(p.title, leftMargin, 12, 16);

      doc.setFont("helvetica", "normal");
      addWrappedText(`• ${p.caption}`, leftMargin, 11, 14, 15);
      addWrappedText(`Tech: ${p.tech}`, leftMargin, 11, 14, 15);
      y += 10;
    });

    // ===== Certifications =====
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Certifications", leftMargin, y);
    y += 20;

    certificates.forEach((c) => {

      doc.setFont("helvetica", "normal");
      addWrappedText(`${c.title} - ${c.organization}`, leftMargin, 11, 14);
      y += 10;
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
