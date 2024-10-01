
 import './CSS/header.css';
 
 import backImage from './Photos/back.jpg';

import { useNavigate } from 'react-router-dom';



 export default function Top(){
  
   const navigate = useNavigate ();

   function handleCV () {
    // setShowPersonalInfo(false);
   
      navigate("/personal-info");
    //navigate to personalinfo 
    }
     function Home(){
        navigate('/');
     }  

   
    return(

    
    
      <div className="top">
          <header>
            
          <div className="nav">
             
            <div className="home"><h2  onClick={Home}>Home</h2></div>
            <div className="hamro "><h2>Hamro CV</h2></div>
            <div className="About"><h2>About Us</h2></div>
          </div>
          </header>
        
            <div className="main">
               <img src={backImage} alt="Background" />
               <h1>"From experience to excellence,<br /> let your CV shine."</h1>
               <div className="btn">
                  <button onClick={handleCV}>Create Your CV</button>
               </div>
            </div>
     
    
      </div>
   );
 }