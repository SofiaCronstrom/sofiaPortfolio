import * as React from "react";
import Sleepcycle from "../images/sleepcycle.png";
import "../style/accordion.css"
const Projects = ()=>{

     const accordionData = {
        image: `${Sleepcycle}`,
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quis sapiente laborum cupiditate possimus labore, hic temporibus 
        velit dicta earum suscipit commodi eum enim atque at? 
        Et perspiciatis dolore iure voluptatem.`
     };
     console.log(accordionData)
     const {image, content} = accordionData;

    return(
     <div className="project-index">
        <div className="accordion-object">
            <div className="accordion-title">
                <img style={{width: "300px"}} src={image} alt="the first page on sleepcycles investor site"/>
                <div>+</div>
            </div>
            <div className="accordion-content">{content}</div>
          </div>
     </div>
    )
};

export default Projects;