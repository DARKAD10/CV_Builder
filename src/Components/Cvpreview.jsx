import React from "react";
import { jsPDF } from "jspdf";
import styles from "./CSS/Component.module.css";

export default function CVPre({ cvData }) {
  const { personalInfo, education, experience } = cvData;

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFontSize(22);
    doc.text("Your C.V.", 20, 20);

    doc.setFontSize(16);
    doc.text("Personal Information", 20, 40);
    doc.setFontSize(12);
    doc.text(`First Name: ${personalInfo.firstName}`, 20, 50);
    doc.text(`Last Name: ${personalInfo.lastName}`, 20, 60);
    doc.text(`City: ${personalInfo.city}`, 20, 70);
    doc.text(`Country/Region: ${personalInfo.country}`, 20, 80);
    doc.text(`Postcode: ${personalInfo.postcode}`, 20, 90);
    doc.text(`Phone: ${personalInfo.phone}`, 20, 100);
    doc.text(`Email: ${personalInfo.email}`, 20, 110);

    doc.addPage();
    doc.setFontSize(16);
    doc.text("Experience", 20, 20);
    doc.setFontSize(12);
    doc.text(`Job Type: ${experience.job}`, 20, 30);
    doc.text(`Company Name: ${experience.company}`, 20, 40);
    doc.text(`City: ${experience.city}`, 20, 50);
    doc.text(`Started Date: ${experience.startdate}`, 20, 60);
    doc.text(`End Date: ${experience.resp}`, 20, 70);

    doc.addPage();
    doc.setFontSize(16);
    doc.text("Education", 20, 20);
    doc.setFontSize(12);
    doc.text(`School/University: ${education.college}`, 20, 30);
    doc.text(`Degree: ${education.course}`, 20, 40);
    doc.text(`City: ${education.college_city}`, 20, 50);
    doc.text(`Start Date: ${education.s_date}`, 20, 60);
    doc.text(`End Date: ${education.e_date}`, 20, 70);
    doc.text(`Description: ${education.des}`, 20, 80);

    // Save the PDF
    doc.save("My_CV.pdf");
  };

  return (
    <div className={styles.cvContainer}>
      <h2 className={styles.heading}>Your C.V.</h2>

      <div className={styles.section}>
        <h3 className={styles.subHeading}>Personal Information</h3>
        <p><strong>First Name:</strong> {personalInfo.firstName}</p>
        <p><strong>Last Name:</strong> {personalInfo.lastName}</p>
        <p><strong>City:</strong> {personalInfo.city}</p>
        <p><strong>Country/Region:</strong> {personalInfo.country}</p>
        <p><strong>Postcode:</strong> {personalInfo.postcode}</p>
        <p><strong>Phone:</strong> {personalInfo.phone}</p>
        <p><strong>Email:</strong> {personalInfo.email}</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.subHeading}>Experience</h3>
        <p><strong>Job Type:</strong> {experience.job}</p>
        <p><strong>Company Name:</strong> {experience.company}</p>
        <p><strong>City:</strong> {experience.city}</p>
        <p><strong>Started Date:</strong> {experience.startdate}</p>
        <p><strong>End Date:</strong> {experience.resp}</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.subHeading}>Education</h3>
        <p><strong>School/University:</strong> {education.college}</p>
        <p><strong>Degree:</strong> {education.course}</p>
        <p><strong>City:</strong> {education.college_city}</p>
        <p><strong>Start Date:</strong> {education.s_date}</p>
        <p><strong>End Date:</strong> {education.e_date}</p>
        <p><strong>Description:</strong> {education.des}</p>
      </div>

      <button 
        onClick={downloadPDF} 
        className={styles.downloadBtn}
      >
        Download CV as PDF
      </button>
    </div>
  );
}
