import * as React from "react";
import { useState } from 'react';
import "../style/accordion.css"


const Projects = ({id, image, content, link})=>{

    const [isActive, setIsActive] = useState("");
    const [isVisibility, setIsVisibility] = useState("")
    
    function toggleAccordion() {

        setIsActive(isActive === "" ? "active" : "");
        setIsVisibility(isActive === "active" ? "translateY(100px)" : "" );
    }

    

    return(
        <div>
        <div className="accordion-object" id={id} onClick={toggleAccordion}>
            <div className={`accordion-title ${isActive}`}
            
            style={{transform: `${isVisibility}`}}
            >
                <img src={image} alt="the first page on sleepcycles investor site"/>
                
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