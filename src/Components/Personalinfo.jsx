import { useNavigate } from 'react-router-dom';
import './CSS/personal.css';

export default function PersonalInfo({ cvData, setCvData }) {
  const navigate = useNavigate();

  // Handle input change to update cvData state
  const handleChange = (e) => {
    setCvData({
      ...cvData,
      personalInfo: {
        ...cvData.personalInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Handle the Next button click
  function next() {
    navigate("/Exp");
  }

  // Handle the Previous button click
  function prev() {
    navigate("/");
  }

  return (
    <div className="form">
      <h1>Create Your Desired CV</h1>

      <div className='name_grp'>
        <div className='first_div'>
          <label className='first'>FIRST NAME</label>
          <input
            type="text"
            placeholder="Ram"
            name='firstName' // Changed to match with handleChange
            value={cvData.personalInfo.firstName || ''} // Bind value to state
            onChange={handleChange} // Update state on change
          />
        </div>

        <div className='second_div'>
          <label className='second'>LAST NAME</label>
          <input
            type="text"
            placeholder="Cena"
            name='lastName' // Changed to match with handleChange
            value={cvData.personalInfo.lastName || ''} // Bind value to state
            onChange={handleChange} // Update state on change
          />
        </div>
      </div>

      <br />
      <div className='city_grp'>
        <div className='city_div'>
          <label>CITY</label>
          <input
            type="text"
            placeholder="Kathmandu"
            className='city'
            name='city' // Added name attribute for dynamic handling
            value={cvData.personalInfo.city || ''} // Bind value to state
            onChange={handleChange} // Update state on change
          />
        </div>
      </div>
      <br />

      <div className='name_grp'>
        <div className='first_div'>
          <label>COUNTRY/REGION</label>
          <input
            type="text"
            placeholder="Nepal"
            name='country' // Added name attribute for dynamic handling
            value={cvData.personalInfo.country || ''} // Bind value to state
            onChange={handleChange} // Update state on change
          />
        </div>

        <div className='second_div'>
          <label>POSTCODE</label>
          <input
            type="text"
            className='post'
            placeholder="85B 4JX"
            name='postcode'
            value={cvData.personalInfo.postcode || ''} // Bind value to state
            onChange={handleChange} // Update state on change
          />
        </div>
      </div>
      <br />

      <div className='name_grp'>
        <div className='first_div'>
          <label>PHONE</label>
          <input
            type="text"
            placeholder="9845361275"
            name='phone' 
            value={cvData.personalInfo.phone || ''} 
            onChange={handleChange} 
          />
        </div>

        <div className='second_div'>
          <label className='lavel'>EMAIL ADDRESS</label>
          <input
            type="email"
            placeholder="ram69@gmail.com"
            name='email' // Added name attribute for dynamic handling
            value={cvData.personalInfo.email || ''} // Bind value to state
            onChange={handleChange} // Update state on change
          />
        </div>
      </div>

      <div className="button">
        <div>
          <button onClick={prev}>Prev</button>
        </div>
        <button onClick={next}>NEXT</button>
      </div>
    </div>
  );
}
