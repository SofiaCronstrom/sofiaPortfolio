import * as React from "react"

import LinkedinIcon from '../images/linkedin-icon.png';
import ProjectArrow from "../images/projectarrow.svg"
import Doodle from "../images/doodle.svg"
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
                <svg width="40" height="39" viewBox="0 0 18 17" fill="#222221" xmlns="http://www.w3.org/2000/svg">
                   <path d="M9.00101 7.30532e-07C4.02793 -0.00195015 0 3.90372 0 8.72435C0 12.5364 2.51972 15.7768 6.02882 16.9668C6.5014 17.0819 6.429 16.7561 6.429 16.5337V15.0218C3.70015 15.332 3.58954 13.5801 3.40655 13.2875C3.03653 12.6749 2.16177 12.5188 2.42319 12.2262C3.04458 11.916 3.67802 12.3042 4.41202 13.3557C4.94291 14.1185 5.97855 13.9898 6.50341 13.863C6.61803 13.4045 6.86337 12.9948 7.20121 12.6768C4.37381 12.1852 3.1954 10.5114 3.1954 8.52146C3.1954 7.55577 3.52318 6.66812 4.16669 5.95215C3.75645 4.77186 4.20489 3.7613 4.26522 3.61109C5.43358 3.50964 6.6482 4.42265 6.74271 4.49484C7.40632 4.32121 8.16445 4.22952 9.01307 4.22952C9.86571 4.22952 10.6259 4.32511 11.2955 4.50069C11.5227 4.33291 12.6489 3.54866 13.7348 3.64425C13.7931 3.79447 14.2315 4.78162 13.8454 5.94629C14.4969 6.66422 14.8287 7.55967 14.8287 8.52731C14.8287 10.5211 13.6423 12.1969 10.8068 12.6807C11.0497 12.9124 11.2425 13.1888 11.3741 13.4936C11.5056 13.7984 11.5733 14.1256 11.573 14.456V16.6508C11.5891 16.8264 11.573 17 11.8747 17C15.436 15.8353 18 12.5715 18 8.7263C18 3.90372 13.9701 7.30532e-07 9.00101 7.30532e-07Z" fill=""/>
               </svg>
             </a> 
            
                <a href='https://www.linkedin.com/in/sofia-cronstr%C3%B6m-080a4998/'>
                <svg width="40" height="39" viewBox="0 0 18 17" fill="#222221"      xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.28 0H0.72C0.32175 0 0 0.303875 0 0.68V16.32C0 16.6961 0.32175 17 0.72 17H17.28C17.6783 17 18 16.6961 18 16.32V0.68C18 0.303875 17.6783 0 17.28 0ZM5.33925 14.4861H2.6685V6.37287H5.33925V14.4861ZM4.005 5.26363C3.69883 5.26363 3.39954 5.17788 3.14498 5.01723C2.89041 4.85659 2.692 4.62825 2.57483 4.36111C2.45767 4.09396 2.42701 3.8 2.48674 3.5164C2.54647 3.2328 2.69391 2.9723 2.9104 2.76783C3.12689 2.56337 3.40272 2.42413 3.703 2.36772C4.00328 2.31131 4.31453 2.34026 4.59739 2.45091C4.88025 2.56157 5.12202 2.74896 5.29212 2.98938C5.46221 3.22981 5.553 3.51247 5.553 3.80162C5.55075 4.60912 4.85775 5.26363 4.005 5.26363ZM15.3383 14.4861H12.6697V10.54C12.6697 9.59863 12.6518 8.3895 11.2815 8.3895C9.89325 8.3895 9.6795 9.41375 9.6795 10.472V14.4861H7.01325V6.37287H9.57375V7.48213H9.60975C9.96525 6.84463 10.836 6.171 12.1365 6.171C14.841 6.171 15.3383 7.85187 15.3383 10.0364V14.4861V14.4861Z" fill=""/>
               </svg>
                </a> 
            </div>
            <div className="text">
                <p className="mail">sofia.cronstrom@gmail.com</p>
            </div>
        </div>
        <img className="projectArrow" src={ProjectArrow} alt="" />
        <img src={Doodle} alt="doodle" className="doodle" />
        
        </div>
    </div> 

  )
}

export default About;