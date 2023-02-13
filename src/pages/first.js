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
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quis sapiente laborum cupiditate possimus labore, hic temporibus 
        velit dicta earum suscipit commodi eum enim atque at? 
        Et perspiciatis dolore iure voluptatem.`
     },
     {
        id: "item2",
        image: `${Mershowroom}`,
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quis sapiente laborum cupiditate possimus labore, hic temporibus 
        velit dicta earum suscipit commodi eum enim atque at? 
        Et perspiciatis dolore iure voluptatem.`
     },
     {
        id: "item3",
        image: `${Dizzydream}`,
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quis sapiente laborum cupiditate possimus labore, hic temporibus 
        velit dicta earum suscipit commodi eum enim atque at? 
        Et perspiciatis dolore iure voluptatem.`
     },
     {
        id: "item4",
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
                {accordionData.map(({ id, image, content }) => (
                <Projects key={id} image={image} content={content}/>
                ))}
         </div>
        </React.Fragment>
   
    );
}
 
export default first;