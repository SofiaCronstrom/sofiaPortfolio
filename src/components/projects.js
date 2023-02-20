import * as React from "react";
import { useState } from 'react';
import "../style/accordion.css"


const Projects = ({id, image, heading, content, link})=>{

    const [isActive, setIsActive] = useState(false);
 
    
    function toggleAccordion() {
        setIsActive(current => !current);
    }

    

    return(
        <div>
        <div className="accordion-object" id={id}>
            <div className="accordion-title"
                 onClick={toggleAccordion}
                 style={{transform: isActive ? 'translateY(100px)' : ''}}
            >
                <img src={image} alt="the first page on sleepcycles investor site"/>
                 <h1>{heading}</h1>  
            </div>
            <div className="accordion-content">
                  {link ?  <a href={link}>Got to website</a> : ""}
                  {content}
            </div>
          </div>
          
        </div>
          
    
    )
};

export default Projects;