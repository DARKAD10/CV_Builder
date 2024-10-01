
import { useNavigate } from "react-router-dom";
import './CSS/Exp.css';
export default function Expss({cvData,setCvData}) {
   

   
  const navigate = useNavigate();
  const change = (e) => {
     setCvData({
      ...cvData,
      experience:{
        ...cvData.experience,
        [e.target.name]: e.target.value,
      }
    
     })
     console.log(e.target.value);

  }


  function next() {
    
    navigate("/Education");
  }

  function prev() {
    navigate("/personal-info");
  }

  return (
    <div className="experience-form">
      <h1>Your Work Experience</h1>

      <div className='job-info-group'>

        <div className='job-title-section'>
          <label className='job-title-label' >JOB TITLE</label>
          <input type="text" placeholder="Software Developer"
           name="job"
          onChange={change}
          value ={cvData.experience.job}/>
        </div>

        <div className='employer-section'>
          <label className='employer-label'>EMPLOYER</label>
          <input type="text" placeholder="Tech Solutions Ltd." 
           name="company"
           onChange={change}
           value ={cvData.experience.company}/>
        </div>
      </div>

      <br />

      <div className='job-location-group'>
        <div className='job-city-section'>
          <label>CITY</label>
          <input type="text" placeholder="Kathmandu" className='job-city'
           name="city"
           onChange={change}
           value ={cvData.experience.city} />
        </div>
      </div>
      <br />

      <div className='job-dates-group'>
        <div className='start-date-section'>
          <label>START DATE</label>
          <input type="date"
           name="startdate"
           onChange={change}
           value ={cvData.experience.startdate} />
        </div>

        <div className='end-date-section'>
          <label>END DATE</label>
          <input type="date"
           name="lastdate"
           onChange={change}
           value ={cvData.experience.lastdate} />
        </div>
      </div>
      <br />

      <div className='job-description-group'>
        <div className='job-description-section'>
          <label>DESCRIPTION</label>
          <textarea placeholder="Describe your responsibilities and achievements" rows="4"
           name="resp"
           onChange={change}
           value ={cvData.experience.resp} />
        </div>
      </div>
      <br />

      <div className="experience-button-group">
        <div>
          <button onClick={prev}>Prev</button>
        </div>
        <button onClick={next}>NEXT</button>
      </div>

    </div>
  )
    }