import * as React from "react";
import { useState } from 'react';
import "../style/projects.css"


import Github from '../images/github-icon.svg';
import Website from '../images/web-icon.svg';

const Projects = ({unique, id, image, heading, content, link})=>{

    const [isActive, setIsActive] = useState(false);
 
    
    function toggleAccordion() {
        setIsActive(current => !current);
    }

    

    return(
        <>
        <div className={`accordion-object ${unique}`} id={id}
            
                 onClick={toggleAccordion}
                 style={{transform: isActive ? '' : ''}}
           >
            <h4>{heading}</h4> 
             <div className="flex">
                    <div className="website">
                    {link ?  
                        <a href={link}><img src={Website} alt="a circle with the text www inside it"/></a> 
                        : ""}
                    </div>
                    <div className="github">
                    {content ?  
                        <a href={content}><img src={Github} alt="the github icon, a round icon with the siluette of a cat in the middle "/></a> 
                        : ""}
                    </div>
                </div>
                <img className="projectImg" src={image} alt="the first page on sleepcycles investor site"/>
               
            
          </div>
         
        </>
          
    
    )
};

export default Projects;