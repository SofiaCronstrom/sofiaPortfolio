import * as React from "react"
import GithubIcon from '../images/github-icon.svg';
import LinkedinIcon from '../images/linkedin-icon.svg';
import ProjectArrow from "../images/projectarrow.svg"
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
           <h2>👋</h2>
              <p className="me-text">
              My name is Sofia and I am a 35 year old woman based in Stockholm, Sweden.<br/> After studying and practicing art for some years I embarked on a new path in life as a frontend developer. 
              <br/>
              What drives me in my work is curiosity, learning new things, creativity, design and exploration.  
              </p>

          </div>
          <div className="text-head" id="contact">
            
            <div className="gitText">
                <a href='https://github.com/SofiaCronstrom'>
                <img src={GithubIcon} className="github" alt="github icon with link to my githubpage when clicked"/>
            
                </a> 
            
                <a href='https://www.linkedin.com/in/sofia-cronstr%C3%B6m-080a4998/'>
                <img src={LinkedinIcon} className="linkedin" alt="linkedin icon with link to my linkedin when clicked"/>
                </a> 
            </div>
            <div className="text">
                <p className="mail">sofia.cronstrom@gmail.com</p>
            </div>
        </div>
        <img className="projectArrow" src={ProjectArrow} alt="" />
        </div>
    </div> 

  )
}

export default About;