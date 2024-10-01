import { useNavigate } from "react-router-dom";
import './CSS/Educate.css';
export default function Educate ({cvData , setCvData}) {
   
     
    const navigate = useNavigate();

    function change (e){
      setCvData({
        ...cvData,
        education:{
          ...cvData.education,
          [e.target.name]:e.target.value,
          
        }
       
      })
      console.log(e.target.value);
    }
   

    function next() {
      console.log("Next button clicked");
      navigate("/Pre");
    }
  
    function prev() {
      navigate("/Exp");
    }
  
    return (
      <div className="education-form">
        <h1>Your Educational Background</h1>
  
        <div className='education-info-group'>
          <div className='school-name-section'>
            <label className='school-name-label'>SCHOOL/UNIVERSITY</label>
            <input type="text" placeholder="Harvard University"
             name='college' 
             value={cvData.education.college || ''} 
         
            onChange={change} />
          </div>
  
          <div className='degree-section'>
            <label className='degree-label'>DEGREE</label>
            <input type="text" placeholder="Bachelor of Science in Computer Science"
             name='course' 
             value={cvData.education.course || ''} 
         
            onChange={change}
            />
          </div>
        </div>
  
        <br />
  
        <div className='education-location-group'>
          <div className='education-city-section'>
            <label>CITY</label>
            <input type="text" placeholder="Cambridge" className='education-city'
             name='college_city' 
             value={cvData.education.college_city || ''} 
         
            onChange={change}
            />
          </div>
        </div>
        <br />
  
        <div className='education-dates-group'>
          <div className='start-education-date-section'>
            <label>START DATE</label>
            <input type="date" 
            name='s_date' 
            value={cvData.education.s_date || ''} 
        
           onChange={change}
            />
          </div>
  
          <div className='end-education-date-section'>
            <label>END DATE</label>
            <input type="date"
             name='e_date' 
             value={cvData.education.e_date || ''} 
         
            onChange={change} />
          </div>
        </div>
        <br />
  
        <div className='education-description-group'>
          <div className='education-description-section'>
            <label>DESCRIPTION</label>
            <textarea
              placeholder="Describe your major subjects, achievements, or projects"
              rows="4"
              style={{ minHeight: "100px", width: "776px" }}

              name='des' 
              value={cvData.education.des || ''} 
          
             onChange={change}
            />
          </div>
        </div>
        <br />
  
        <div className="education-button-group">
          <div>
            <button onClick={prev}>Prev</button>
          </div>
          <button onClick={next}>NEXT</button>
        </div>
      </div>
    );
}