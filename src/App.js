
import * as React from "react"
import Header from "./pages/header"
import About from "./pages/about"
import Projects from './pages/projects';
import Contact from './pages/contact';
import First from './pages/first';
import './components/layout.css'

const App = () => {
  
  
  return (
    
   <div className="wrapper-index">
     <Header/>
       <First/>
       <div className="border-about"></div> 
      <About/>
      <div className="border-about"></div> 
      <Projects/>
      <div className="border-about"></div> 
      <Contact/>
   </div>
  
  )

}

export default App;
