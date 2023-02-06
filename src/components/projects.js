import * as React from "react";
import { useState } from 'react';
import "../style/accordion.css"


const Projects = ({image, content})=>{

    const [isActive, setIsActive] = useState(false);
  

    return(
    
        <div className="accordion-object">
            <div className="accordion-title"
            onClick={() => setIsActive(!isActive)}
            >
                <img style={{width: "300px"}} src={image} alt="the first page on sleepcycles investor site"/>
                
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
          </div>
    
    )
};

export default Projects;