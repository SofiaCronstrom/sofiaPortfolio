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
            </div>
            <div className="accordion-content">
                  <h4>{heading}</h4> 
                  <div className="flex">
                    {link ?  <a href={link}>Got to website</a> : ""}<br/>
                    <p>{content}</p>
                  </div>
            </div>
          </div>
         
        </div>
          
    
    )
};

export default Projects;