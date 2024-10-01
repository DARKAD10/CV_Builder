import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Top from './Components/Header';
import PersonalInfo from './Components/Personalinfo';

import Expss from './Components/Exp';
import Educate from './Components/Education';
import CVPre from './Components/Cvpreview';

export default function App() {
  const[cvdata ,setCvData] =useState({
    personalInfo: {},
    education : {},
    experience: {}
  });
  
  return (
 
     <Routes>
     
        <Route path="/" element={<Top />} /> 
      
    
        <Route path="/personal-info" element={<PersonalInfo  cvData={cvdata}  setCvData={setCvData}/>} />   

       <Route path="/Exp" element={<Expss  cvData={cvdata} setCvData={setCvData} />} />

       <Route path='/Education' element ={<Educate  cvData={cvdata}   setCvData={setCvData}/>} />
       
     <Route path='/Pre'  element={<CVPre  cvData={cvdata} />} />

    </Routes> 
  );
}
