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
        image: `${Sleepcycle}`,
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quis sapiente laborum cupiditate possimus labore, hic temporibus 
        velit dicta earum suscipit commodi eum enim atque at? 
        Et perspiciatis dolore iure voluptatem.`
     },
     {
        image: `${Mershowroom}`,
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quis sapiente laborum cupiditate possimus labore, hic temporibus 
        velit dicta earum suscipit commodi eum enim atque at? 
        Et perspiciatis dolore iure voluptatem.`
     },
     {
        image: `${Dizzydream}`,
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quis sapiente laborum cupiditate possimus labore, hic temporibus 
        velit dicta earum suscipit commodi eum enim atque at? 
        Et perspiciatis dolore iure voluptatem.`
     },
     {
        image: `${Weatherapp}`,
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quis sapiente laborum cupiditate possimus labore, hic temporibus 
        velit dicta earum suscipit commodi eum enim atque at? 
        Et perspiciatis dolore iure voluptatem.`
     }

    ];
    return (  
        
        <React.Fragment>
          <About/>
          <div className="project-index">
                {accordionData.map(({ image, content }) => (
                <Projects image={image} content={content}/>
                ))}
         </div>
        </React.Fragment>
   
    );
}
 
export default first;