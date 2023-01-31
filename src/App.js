
import * as React from "react"
import Header from "./pages/header"
import About from "./pages/about"
import Projects from './pages/projects';
import Contact from './pages/contact';
import First from './pages/first';
import './style/layout.css'

const App = () => {
  
  
  return (
    
   <div className="wrapper-index">
     <Header/>
       <First/>
      <About/>
      <Projects/>
      <Contact/>
   </div>
  
  )

}

export default App;
