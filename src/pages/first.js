import * as React from "react";

import About from '../components/about.js';
import Projects from '../components/projects.js'
import Sleepcycle from "../images/sleepcycle.png";
import Mershowroom from "../images/mershowroom.png";
import Dizzydream from "../images/dizzydream.png";
import Weatherapp from "../images/weatherapp.png";

import './first.css';
const first = () => {


    const accordionData = [
    {
        id: "item1",
        image: `${Sleepcycle}`,
        heading: "Sleep Cycle, inv. site",
        content: `WaaS: EJS, emmet, less, javascript`,
        link: "https://investors.sleepcycle.com/"
     },
     {
        id: "item2",
        image: `${Mershowroom}`,
        heading: "Virtual showroom",
        content: `BabylonJS, typescript`,
        link: "https://mershowroom.netlify.app/"
     },
     {
        id: "item3",
        image: `${Dizzydream}`,
        heading: "WebVR game",
        content: `A-frame`,
        link: "https://sofiacronstrom.github.io/dizzy-dream/"
     },
     {
        id: "item4",
        image: `${Weatherapp}`,
        heading: "Weather app",
        content: `HTML, CSS, Javascript`
     }
  

    ];
    return (  
        
        <React.Fragment>
          <About/>
        
          <div className="project-index">
                {accordionData.map(({ id, image, heading, content, link }) => (
                <Projects key={id} image={image}  content={content} link={link} heading={heading}/>
                ))}
         </div>
        </React.Fragment>
   
    );
}
 
export default first;