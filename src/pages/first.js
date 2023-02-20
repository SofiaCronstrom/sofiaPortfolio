import * as React from "react";

import About from '../components/about.js';
import Projects from '../components/projects.js'
//import Doodle from "../images/doodle.svg"
//import Hidoodle from "../images/hidoodle.svg"
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
        heading: "Investor site for Sleep Cycle",
        content: ` Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at?`,
        link: "https://investors.sleepcycle.com/"
     },
     {
        id: "item2",
        image: `${Mershowroom}`,
        heading: "Virtual showroom for MER architects",
        content: ` Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at?`,
        link: "https://mershowroom.netlify.app/"
     },
     {
        id: "item3",
        image: `${Dizzydream}`,
        heading: "WebVR game",
        content: `Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at?`,
        link: "https://sofiacronstrom.github.io/dizzy-dream/"
     },
     {
        id: "item4",
        image: `${Weatherapp}`,
        heading: "Weather app in pure javascript",
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quis sapiente laborum cupiditate possimus labore, hic temporibus`
     }

    ];
    return (  
        
        <React.Fragment>
          <About/>
        
          <div className="project-index">
                {accordionData.map(({ id, image, heading, content, link }) => (
                <Projects key={id} image={image}  content={content} link={link}/>
                ))}
         </div>
        { /*<img src={Doodle} alt="doodle" className="doodle" />*/}
        </React.Fragment>
   
    );
}
 
export default first;