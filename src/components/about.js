import * as React from "react"
import '../style/about.css'
const About = () => {

  return (

   <div className="wrapper-about">
      
       <div className="text-container">
         <div className="profile-container">
         <div className="index-box">
        <h1 className="index-name">SOFIA CRONSTRÖM<br/></h1>
        <h2 className="index-header">Frontend developer</h2>
        </div>
         </div>
         <div className="text-head">
           <h2>Hi!</h2>
              <p className="me-text">
              My name is Sofia and I am a 35 year old woman based in Stockholm, Sweden.<br/> After studying and practicing art for some years I embarked on a new path in life as a frontend developer. 
              <br/>
              What drives me in my work is curiosity, learning new things, creativity, design and exploration.  
              </p>

          </div>
          
        </div>
    </div> 

  )
}

export default About;