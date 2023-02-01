import * as React from "react";
import GithubIcon from '../images/github.png';
import LinkedinIcon from '../images/linkedin.png';
import About from '../components/about.js';
import './first.css';
const first = () => {


    return (  
        
        <div class="wrapper">
          <About/>
        
        <div className="container-index">
            
        
        <div className="gitText-first">
                <a href='https://github.com/SofiaCronstrom'>
                <img src={GithubIcon} className="github-first" alt="github icon with link to my githubpage when clicked"/>
            
                </a> 
            
                <a href='https://www.linkedin.com/in/sofia-cronstr%C3%B6m-080a4998/'>
                <img src={LinkedinIcon} className="linkedin-first" alt="linkedin icon with link to my linkedin when clicked"/>
                </a> 
            </div>
        </div>
      </div>
    );
}
 
export default first;