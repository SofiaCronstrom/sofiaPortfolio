import * as React from "react";
import GithubIcon from '../images/github-icon.svg';
import LinkedinIcon from '../images/linkedin-icon.svg';
import '../style/contact.css';



const ContactPage = () =>  {

return (
<div className="wrapper-contact">
   <div className="text-contact">
       <div className="contact-container">
            <h1>Contact</h1>
            <div className="text">
                <h2>sofia.cronstrom@gmail.com</h2>
            </div>
            <div className="gitText">
                <a href='https://github.com/SofiaCronstrom'>
                <img src={GithubIcon} className="github" alt="github icon with link to my githubpage when clicked"/>
            
                </a> 
            
                <a href='https://www.linkedin.com/in/sofia-cronstr%C3%B6m-080a4998/'>
                <img src={LinkedinIcon} className="linkedin" alt="linkedin icon with link to my linkedin when clicked"/>
                </a> 
            </div>
        </div>
    </div>
</div>

)
}
export default ContactPage;