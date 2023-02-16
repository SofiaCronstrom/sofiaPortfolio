import * as React from "react";
import { useState } from 'react';
import "../style/accordion.css"


const Projects = ({id, image, content, link})=>{

    const [isActive, setIsActive] = useState("");
    //const [isOpacity, setIsOpacity] = useState("0");
    const [isVisibility, setIsVisibility] = useState("-1")
    
    function toggleAccordion() {
        setIsActive(isActive === "" ? "active" : "");
       // setIsOpacity(
       //   isActive === "active" ? "0" : "1"
       // );
        setIsVisibility(
           isActive === "active" ? "2" : "-1"
        );
    }

    return(
    
        <div className="accordion-object" id={id}>
            <div className={`accordion-title ${isActive}`}
            onClick={toggleAccordion}
            >
                <img src={image} alt="the first page on sleepcycles investor site"/>
                
            </div>
            <div className="accordion-content"
                  style={{zIndex: `${isVisibility}`}}>
                  <a href={link}>Go to website</a><br/>
                    {content}
            </div>
          </div>
    
    )
};

export default Projects;