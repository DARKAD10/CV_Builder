import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Top from './Components/Header';  // Ensure Header.js exists
import PersonalInfo from './Components/PersonalInfo';  // Correct casing
import Expss from './Components/Exp';  // Ensure Exp.js exists
import Educate from './Components/Education';  // Ensure Education.js exists
import CVPre from './Components/CvPreview';  // Correct casing

export default function App() {
  const [cvdata, setCvData] = useState({
    personalInfo: {},
    education: {},
    experience: {},
  });

  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/personal-info" element={<PersonalInfo cvData={cvdata} setCvData={setCvData} />} />
      <Route path="/Exp" element={<Expss cvData={cvdata} setCvData={setCvData} />} />
      <Route path="/Education" element={<Educate cvData={cvdata} setCvData={setCvData} />} />
      <Route path="/Pre" element={<CVPre cvData={cvdata} />} />
    </Routes>
  );
}
