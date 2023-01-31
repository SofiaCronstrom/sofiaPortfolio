import * as React from "react";
import GithubIcon from '../images/github.png';
import LinkedinIcon from '../images/linkedin.png';
import '../style/first.css'
const first = () => {


    return (  
        <div className="container-index">
        <div className="index-box">
        <h1 className="index-name">SOFIA CRONSTRÖM<br/></h1>
        <h2 className="index-header">Frontend developer</h2>
        </div>
        <div className="gitText-first">
                <a href='https://github.com/SofiaCronstrom'>
                <img src={GithubIcon} className="github-first" alt="github icon with link to my githubpage when clicked"/>
            
                </a> 
            
                <a href='https://www.linkedin.com/in/sofia-cronstr%C3%B6m-080a4998/'>
                <img src={LinkedinIcon} className="linkedin-first" alt="linkedin icon with link to my linkedin when clicked"/>
                </a> 
            </div>
        </div>
      
    );
}
 
export default first;